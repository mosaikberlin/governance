import { PropTypes } from 'prop-types';
import { useRef, useLayoutEffect } from "react";
import { select, scaleLinear, interpolateHcl, pack, hierarchy, interpolateZoom } from "d3";
import { governance } from "../../data/governance";

// https://observablehq.com/@d3/zoomable-circle-packing

// const log = (...args) => {
//   console.log(`[${new Date().toLocaleTimeString()}]`, ...args);
//   return true;
// }

const packData = (data, width, height) => pack()
  .size([width, height])
  .padding(0.25)(hierarchy(data)
    .sum(d => d.value)
    .sort((a, b) => b.value - a.value));

const color = scaleLinear()
  .domain([0, 5])
  .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
  .interpolate(interpolateHcl);

export const OrgChart = ({ width, height }) => {
  let node, label, k;
  const wrapperRef = useRef(null);
  const viewRef = useRef(null);
  const root = packData(governance, width, height);
  let focus = root;

  const zoomTo = (v) => {
    viewRef.current = v;
    k = width / v[2];
    label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    node
      .attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`)
      .attr("r", d => d.r * k);
  }
  
  const zoom = (event, d) => {
    focus = d;

    const transition = select(wrapperRef.current)
      .transition()
      .duration(event.altKey ? 7500 : 750)
      .tween("zoom", d => {
        const i = interpolateZoom(viewRef.current, [focus.x, focus.y, focus.r * 2]);
        return t => zoomTo(i(t));
      });

    label
      .transition(transition)
        .style("fill-opacity", d => d.parent === focus ? 1 : 0)
        .style("display", d => d.parent === focus ? "inline" : "none");
  }

  useLayoutEffect(() => {
    viewRef.current = [focus.x, focus.y, focus.r * 2];
    k = width / viewRef.current[2];
    
    select(wrapperRef.current)
      .selectAll("*")
      .remove();

    node = select(wrapperRef.current)
      .append("g")
      .selectAll("circle")
      .data(root.descendants().slice(1))
      .join("circle")
        .attr("fill", d => d.children ? color(d.depth) : "white")
        .attr("pointer-events", d => !d.children ? "none" : null)
        .on("mouseover", () => { select(this).attr("stroke", "#000"); })
        .on("mouseout", () => { select(this).attr("stroke", null); })
        .on("click", (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()))

    label = select(wrapperRef.current)
      .append("g")
        .style("font", "10px sans-serif")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
      .selectAll("text")
      .data(root.descendants())
      .join("text")
        .style("fill-opacity", d => d.parent === focus ? 1 : 0)
        .style("display", d => d.parent === focus ? "inline" : "none")
        .text(d => d.data.name)

    zoomTo([focus.x, focus.y, focus.r * 2]);

  }, [width, height]);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`${-width / 2}, ${-height / 2}, ${width}, ${height}`}
      style={{
        margin: "0 -14px",
        display: "block",
        backgroundColor: color(0),
        cursor: "pointer",
      }}
      onClick={(event) => zoom(event, root)}
      ref={wrapperRef}
    />
  )
}

OrgChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

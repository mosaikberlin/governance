import { PropTypes } from 'prop-types';
import { useRef, useLayoutEffect, useCallback } from "react";
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
  const wrapperRef = useRef(null);
  const viewRef = useRef(null);
  const nodeRef = useRef(null);
  const labelRef = useRef(null);
  const rootRef = useRef(packData(governance, width, height));
  const focusRef = useRef(rootRef.current);
  
  const zoomTo = useCallback((v) => {
    viewRef.current = v;
    const k = width / v[2];
    labelRef.current.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
    nodeRef.current
      .attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`)
      .attr("r", d => d.r * k);
  }, [width]);
  
  const zoom = useCallback((event, d) => {
    focusRef.current = d;

    const transition = select(wrapperRef.current)
      .transition()
      .duration(event.altKey ? 7500 : 750)
      .tween("zoom", d => {
        const i = interpolateZoom(viewRef.current, [focusRef.current.x, focusRef.current.y, focusRef.current.r * 2]);
        return t => zoomTo(i(t));
      });

    labelRef.current
      .transition(transition)
        .style("fill-opacity", d => d.parent === focusRef.current ? 1 : 0)
        .style("display", d => d.parent === focusRef.current ? "inline" : "none");
  }, [zoomTo]);

  useLayoutEffect(() => {
    viewRef.current = [focusRef.current.x, focusRef.current.y, focusRef.current.r * 2];
    
    select(wrapperRef.current)
      .selectAll("*")
      .remove();

    nodeRef.current = select(wrapperRef.current)
      .append("g")
      .selectAll("circle")
      .data(rootRef.current.descendants().slice(1))
      .join("circle")
        .attr("fill", d => d.children ? color(d.depth) : "white")
        .attr("pointer-events", d => !d.children ? "none" : null)
        .on("mouseover", () => { select(this).attr("stroke", "#000"); })
        .on("mouseout", () => { select(this).attr("stroke", null); })
        .on("click", (event, d) => focusRef.current !== d && (zoom(event, d), event.stopPropagation()))

    labelRef.current = select(wrapperRef.current)
      .append("g")
        .style("font", "10px sans-serif")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
      .selectAll("text")
      .data(rootRef.current.descendants())
      .join("text")
        .style("fill-opacity", d => d.parent === focusRef.current ? 1 : 0)
        .style("display", d => d.parent === focusRef.current ? "inline" : "none")
        .text(d => d.data.name)

    zoomTo([focusRef.current.x, focusRef.current.y, focusRef.current.r * 2]);

  }, [width, height, zoom, zoomTo]);

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
      onClick={(event) => zoom(event, rootRef.current)}
      ref={wrapperRef}
    />
  )
}

OrgChart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

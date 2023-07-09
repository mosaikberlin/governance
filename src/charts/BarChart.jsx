import React, { Component } from 'react'
import * as d3 from 'd3'

class BarChart extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const { data, width, height } = this.props;

        const svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => width - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green");
    }
    render() {
        return <div id={"#" + this.props.id}></div>
    }
}

export default BarChart;

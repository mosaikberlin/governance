import React, { Component } from 'react'
import * as d3 from 'd3'

class BarChart extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const { wrapperId } = this.props;
        const data = [12,5,6,6,9,10];
        const width = 600;
        const height = 300;
        const barWidth = 70; //width / data.length;
        //const valueRange = Math.max(data) - Math.min(data, 0);
        const heightPerPoint = 10; //height / valueRange;

        //const svg = d3.select("#org-chart-d3")
        const svg = d3.select(wrapperId)
            .append("svg")
            //.attr("width", 700)
            //.attr("height", 300);
            .attr("width", width)
            .attr("height", height);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * barWidth)
            .attr("y", (d, i) => height - heightPerPoint * d)
            .attr("width", barWidth - 5) //* 0.92)
            .attr("height", (d, i) => d * heightPerPoint)
            .attr("fill", "green");
    }

    render() {
        return <div id={"#" + this.props.id}></div>
    }
}

export default BarChart;

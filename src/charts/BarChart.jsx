import React, { Component } from 'react'
import * as d3 from 'd3'

class BarChart extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        //const { data, width, height } = this.props;
        const { wrapperId } = this.props;
        const data = [12,5,6,6,9,10];
        const width = 600;
        const height = 300;
        const barWidth = width / data.length;
        const valueRange = Math.max(data) - Math.min(data, 0);
        const heightPerPoint = height / valueRange;
        this.width = width;
        this.height = height;
        this.barWidth = barWidth;
        this.heightPerPoint = heightPerPoint;

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
            .attr("width", barWidth * 0.92)
            .attr("height", (d, i) => d * heightPerPoint)
            .attr("fill", "green");
    }

    render() {
        return <div id={"#" + this.props.id}>
            width = { this.width }<br/>
            height = { this.height }<br/>
            barWidth = { this.barWidth }<br/>
            heightPerPoint = { this.heightPerPoint }<br/>
        </div>
    }
}

export default BarChart;

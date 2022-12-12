import moment from "moment";
import React from "react";
import ReactApexChart from "react-apexcharts";

class CandleStickChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "candle",
          data: [
            {
              x: moment().add("day", 1),
              y: [6600.63, 6601.21, 6590.39, 6591.02],
            },
            {
              x: moment().add("day", 2),
              y: [6591.02, 6603.08, 6591, 6591],
            },
            {
              x: moment().add("day", 3),
              y: [6591, 6601.32, 6585, 6592],
            },
            {
              x: moment().add("day", 4),
              y: [6593.13, 6596.01, 6590, 6593.34],
            },
            {
              x: moment().add("day", 5),
              y: [6593.34, 6604.76, 6582.63, 6593.86],
            },
            {
              x: moment().add("day", 6),
              y: [6593.86, 6604.28, 6586.57, 6600.01],
            },
            {
              x: moment().add("day", 7),
              y: [6601.81, 6603.21, 6592.78, 6596.25],
            },
            {
              x: moment().add("day", 8),
              y: [6596.25, 6604.2, 6590, 6602.99],
            },
            {
              x: moment().add("day", 9),
              y: [6602.99, 6606, 6584.99, 6587.81],
            },
            {
              x: moment().add("day", 10),
              y: [6587.81, 6595, 6583.27, 6591.96],
            },
            {
              x: moment().add("day", 11),
              y: [6591.97, 6596.07, 6585, 6588.39],
            },
            {
              x: moment().add("day", 12),
              y: [6587.6, 6598.21, 6587.6, 6594.27],
            },
            {
              x: moment().add("day", 13),
              y: [6596.44, 6601, 6590, 6596.55],
            },
            {
              x: moment().add("day", 14),
              y: [6598.91, 6605, 6596.61, 6600.02],
            },
            {
              x: moment().add("day", 15),
              y: [6600.55, 6605, 6589.14, 6593.01],
            },
            {
              x: moment().add("day", 16),
              y: [6593.15, 6605, 6592, 6603.06],
            },
            {
              x: moment().add("day", 17),
              y: [6603.07, 6604.5, 6599.09, 6603.89],
            },
            {
              x: moment().add("day", 18),
              y: [6604.44, 6604.44, 6600, 6603.5],
            },
            {
              x: moment().add("day", 19),
              y: [6603.5, 6603.99, 6597.5, 6603.86],
            },
            {
              x: moment().add("day", 20),
              y: [6603.85, 6605, 6600, 6604.07],
            },
            {
              x: moment().add("day", 21),
              y: [6604.98, 6609, 6604.07, 6606],
            },
            {
              x: moment().add("day", 22),
              y: [6604.98, 6606, 6604.07, 6599],
            },
            {
              x: moment().add("day", 23),
              y: [6604.98, 6600, 6604.07, 6606],
            },
            {
              x: moment().add("day", 24),
              y: [6604.98, 6606, 6604.07, 6601],
            },
            {
              x: moment().add("day", 25),
              y: [6604.98, 6599, 6604.07, 6606],
            },
            {
              x: moment().add("day", 26),
              y: [6599.98, 6606, 6600, 6606],
            },
            {
              x: moment().add("day", 27),
              y: [6604.98, 6606, 6604.07, 6606],
            },
            {
              x: moment().add("day", 28),
              y: [6604.98, 6589, 6610.07, 6610],
            },
            {
              x: moment().add("day", 29),
              y: [6604.98, 6606, 6604.07, 6606],
            },
            {
              x: moment().add("day", 30),
              y: [6599, 6606, 6610.07, 6606],
            },
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "candlestick",
          toolbar: { show: false },
        },
        grid: {
          show: true, // you can either change hear to disable all grids
          xaxis: {
            lines: {
              show: false, //or just here to disable only x axis grids
            },
          },
          yaxis: {
            lines: {
              show: true, //or just here to disable only y axis
            },
          },
        },
        plotOptions: {
          candlestick: {
            bar: {
              borderRadius: 5,
            },
            colors: {
              upward: "#C38BFF",
              downward: "#FF0000",
            },

            linecap: "round",
          },
        },
        stroke: {
          curve: "smooth",
          linecap: "round",
        },

        tooltip: {
          enabled: true,
        },
        xaxis: {
          type: "category",
          labels: {
            formatter: function (val) {
              return moment(val).format("dddd").substring(0, 1);
            },
            style: {
              fontSize: 8,
            },
          },
          tooltip: {
            enabled: true,
            formatter: function (val) {
              return moment().add("days", val).format("DD MMM, YYYY");
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: false,
          },
          opposite: true,
          labels: {
            formatter: function (val) {
              return "$" + Math.floor(val);
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="candlestick"
          height={350}
        />
      </div>
    );
  }
}
export default CandleStickChart;

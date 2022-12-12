import moment from "moment";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Subscribed",
          data: [
            {
              x: "Jan",
              y: 0,
            },
            {
              x: "Feb",
              y: 0,
            },
            {
              x: "Mar",
              y: 0,
            },
            {
              x: "Apr",
              y: 0,
            },
            {
              x: "May",
              y: 0,
            },
            {
              x: "Jun",
              y: 0,
            },
            {
              x: "Jul",
              y: 0,
            },
            {
              x: "Aug",
              y: 0,
            },
            {
              x: "Sep",
              y: 0,
            },
            {
              x: "Oct",
              y: 0,
            },
            {
              x: "Nov",
              y: 0,
            },
            {
              x: "Dec",
              y: 3,
            },
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 200,
          toolbar: {
            show: false,
          },
        },
        colors: ["#35B368"],

        dataLabels: {
          enabled: false,
        },
        grid: {
          // show: false,
          borderColor: "#fff",
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
        xaxis: {
          type: "category",
          axisTicks: {
            show: false,
          },

          // labels: {
          //   formatter: function (val) {
          //     return "Q" + dayjs(val).quarter();
          //   },
          // },
        },
        yaxis: {
          type: "category",
          axisBorder: {
            show: true,
          },
          labels: {
            formatter: function (val) {
              return val;
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
          type="bar"
          height={380}
        />
      </div>
    );
  }
}

import React from 'react'
import './CustomerReview.css'
import Chart from 'react-apexcharts'
const CustomerReview = () => {


    const data = {
        series: [
            {
                name: 'Review',
                data: [10,50,30,90,40,120,100],
            },
        ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enable: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        color: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-05-19T00:00:00.000Z",
          "2018-05-19T01:00:30.000Z",
          "2018-05-19T02:00:30.000Z",
          "2018-05-19T03:00:30.000Z",
          "2018-05-19T04:00:30.000Z",
          "2018-05-19T05:00:30.000Z",
          "2018-05-19T06:00:30.000Z",
        ],
      },
    },
  };

  return (
    <div>
        <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default CustomerReview

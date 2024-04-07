import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import  Chart  from "react-apexcharts";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  
  
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

//Compact card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId = 'setExpanded'
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>{`Last 24 hours`}</span>
      </div>
    </motion.div>
  );
}

// Expanded card

function ExpandedCard({ param, setExpanded }) {

  const data = {
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
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId = 'setExpanded'
      >
      <div style={{alignSelf: 'flex-end', cursor: 'pointer', color: 'white'}}>
        <UilTimes onClick={setExpanded} 
        />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart
          series={param.series}
          type="area"
          options={data.options}
        />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;

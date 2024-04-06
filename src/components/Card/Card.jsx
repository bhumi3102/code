import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { AnimateSharedLayout } from "framer-motion";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? "Expended" : <CompactCard param={props} />}
    </AnimateSharedLayout>
  );
};

//Compact card
function CompactCard({ param }) {
  const Png = param.png;
 return( <div className="CompactCard" style={{
    background: param.color.backGround,
    boxShadow: param.color.boxShadow}}>
    <div className="radialBar">
        <CircularProgressbar
        value={param.barValue}
        text={`${param.barValue}%`}/>

    </div>
    <div className="detail">
      <Png />
      <span>${param.value}</span>
      <span>{`Last 24 hours`}</span>
    </div>
  </div>
 )
}

export default Card;

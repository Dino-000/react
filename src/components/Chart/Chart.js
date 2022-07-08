import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  //use spread to convert an array to a series of value (seperated by comma)
  const totalMaximun = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

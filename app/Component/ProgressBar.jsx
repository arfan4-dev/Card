import React from "react";
import "./Bar.css";

const ProgressBar = ({ percentage }) => {
  const borderStyle = {
    strokeDashoffset: 440 - (440 * percentage) / 100,
  };

  return (
    <div className="progress-bar">
      <svg className="progress-svg" viewBox="0 0 100 100">
        <circle className="progress-bg" cx="50" cy="50" r="45" />
        <circle className="progress-border" cx="50" cy="50" r="45" style={borderStyle} />
        <text className="progress-text" x="50" y="50" textAnchor="middle">
          {/* {percentage}% */}
        </text>
      </svg>
    </div>
  );
};

export default ProgressBar;

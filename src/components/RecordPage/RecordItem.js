import React from "react";

const RecordItem = ({ date, desc, imageUri }) => {
  return (
    <div className="section">
      <div className="bead"></div>
      <div className="content">
        <h2>{date}</h2>
        <p>{desc}</p>
        <img src={imageUri} alt="..." />
      </div>
    </div>
  );
};

export default RecordItem;

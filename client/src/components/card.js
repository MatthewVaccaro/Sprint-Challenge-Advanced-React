import React from "react";

const Card = props => {
  return (
    <div>
      <h2 className="light ">{props.data.name}</h2>
      <p className="light ">{props.data.country}</p>
    </div>
  );
};

export default Card;

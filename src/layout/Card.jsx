import React from "react";
import "./card.css";

export default (props) => {
  const style = {
      backgroundColor: props.color || '#F00',
      borderColor: props.color || '#F00'
  };
  return (
    <div className="card" style={style}>
      <div className="titulo">{props.titulo}</div>
      <div className="content">{props.children}</div>
    </div>
  );
};

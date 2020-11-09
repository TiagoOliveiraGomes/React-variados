import React from "react";

export default (props) => {
    
  const number = props.numero % 2 === 0;

  return <div>
      {number ? <span>Par</span> : <span>impar</span>}
      </div>;
};

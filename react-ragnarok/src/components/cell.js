import React, { useEffect } from 'react';

const Cell = ({ type, name, desc}) => {
  return (
    <div className="gods">
      <img src={"/images/" + type + "/" + name + ".png"} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}
export default Cell;
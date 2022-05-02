import React, { useEffect } from 'react';

const God = ({ name, desc}) => {
  return (
    <div className="gods">
      <img src={"/images/humans/" + name + ".png"} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}
export default God;
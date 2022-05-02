import React from 'react';

const Creature = ({ name, desc}) => {
  return (
    <div className="gods">
      <img src={"/images/mobs/" + name + ".png"} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}
export default Creature;
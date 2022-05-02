import React from 'react';

const LoreEntry = ({ name, desc}) => {
  return (
    <div className="gods">
      <img src={"/images/lore/" + name + ".png"} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}
export default LoreEntry;
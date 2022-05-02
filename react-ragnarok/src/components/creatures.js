import React, { useEffect, useState } from 'react';
import Creature from './creature';

const Gods = ({ data }) => {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    setCreatures(data.creatures);
    console.log(data.creatures);
  }, [])
  

  return (
      <div>
        <div className="grid-layout">
          {creatures.map((creature, index) => 
              <Creature key={index} name={creature.name} desc={creature.desc} />
          )}
        </div>   
      </div>
    );  
}
export default Gods;

import React, { useEffect, useState } from 'react';
import LoreEntry from './loreEntry';

const Lore = ({ data }) => {
  const [lore, setLore] = useState([]);

  useEffect(() => {
    setLore(data.lore);
    console.log(data.lore);
  }, [])
  

  return (
      <div>
        <div className="grid-layout">
          {lore.map((lore, index) => 
              <LoreEntry key={index} name={lore.name} desc={lore.desc} />
          )}
        </div>   
      </div>
    );  
}
export default Lore;

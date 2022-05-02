import React, { useEffect, useState } from 'react';
import God from './god';

const Gods = ({ data }) => {
  const [gods, setGods] = useState([]);

  useEffect(() => {
    setGods(data.gods);
    console.log(data.gods);
  }, [])
  

  return (
      <div>
        <div className="grid-layout">
          {gods.map((god, index) => 
              <God key={index} name={god.name} desc={god.desc} />
          )}
        </div>   
      </div>
    );  
}
export default Gods;

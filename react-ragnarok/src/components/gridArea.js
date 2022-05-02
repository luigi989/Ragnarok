import React, { useEffect, useState } from 'react';
import Cell from './cell';

const GridArea = ({ data, type }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(data.content);
    console.log(data.content);
  }, [])

  return (
      <div>
        <div className="grid-layout">
          {content.map((cell, index) => 
              <Cell key={index} type={type} name={cell.name} desc={cell.desc} />
          )}
        </div>   
      </div>
    );  
}
export default GridArea;

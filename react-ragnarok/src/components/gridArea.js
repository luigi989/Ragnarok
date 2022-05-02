import React, { useEffect, useState } from 'react';
import Cell from './cell';
import GridTitle from './gridTitle';

const GridArea = ({ data, type }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(data.content);
  }, [])

  return (
      <div>
        <GridTitle name={type} />
        <div className="grid grid-cols-5 mb-4">
          {content.map((cell, index) => 
              <Cell key={index} type={type} name={cell.name} desc={cell.desc} />
          )}
        </div>   
      </div>
    );  
}
export default GridArea;

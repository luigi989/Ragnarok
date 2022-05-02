import React, { useEffect } from 'react';

const Cell = ({ type, name, desc}) => {  
  return (
    <div className="group relative cursor-pointer transition ease-linear duration-300
                    overflow-hidden w-fit">
      <div className='absolute top-0 left-0 right-0 bottom-0 z-[-1] 
                    border-[#9c5518] border-solid border-0 group-hover:border-4'/>
      <img src={"/images/" + type + "/" + name + ".png"} alt={name} />
      <h1 className='absolute top-0 left-0 py-1 px-2 bg-[#9c5518]'>{name}</h1>
    </div>
  );
}
export default Cell;
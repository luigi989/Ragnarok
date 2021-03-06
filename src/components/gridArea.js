import React, { useEffect, useState } from 'react';
import Cell from './cell';

const GridArea = ({ data, type }) => {
  const [content, setContent] = useState([]);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setContent(data.content);
  }, [data])

  return (
    <div>
      <div className=''>
        <h1 onClick={() => setHidden(!hidden)} className='inline-block text-2xl text-yellow-600 ml-3 hover:cursor-pointer w-fit first-letter:uppercase'>{type}</h1>
        <label className='swap swap-rotate text-black'>
          <input type="checkbox" />
          <svg className={hidden ? "swap-on w-[2em] h-[2em]" : "swap-off w-[2em] h-[2em]"} viewBox="0 0 20 20">
            <path d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"></path>
          </svg>
          <svg className={hidden ? "swap-off w-[2em] h-[2em]" : "swap-on w-[2em] h-[2em]"} viewBox="0 0 20 20">
            <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
          </svg>
        </label>
      </div>

      <div className={hidden ? "hidden" : "grid grid-cols-8 mb-4"}>
        {content.map((cell, index) =>
          <Cell key={index} type={type} name={cell.name} desc={cell.desc} />
        )}
      </div>
    </div>
  );
}
export default GridArea;

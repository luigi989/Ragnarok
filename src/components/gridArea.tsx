import { useEffect, useState } from 'react';
import { Test } from '../interfaces';
import Cell from './cell';
import Collapse from './collapse';

export interface GridAreaProps {
  data: Array<Test>;
  type: string;
}

export default function GridArea({ data, type } : GridAreaProps) {
  const [content, setContent] = useState(data);
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <div className='flex items-center gap-3'>
        <h1 className='inline-block text-2xl text-yellow-600 hover:cursor-pointer w-fit first-letter:uppercase'>{type}</h1>
        <Collapse hidden={hidden} onClick={() => setHidden(!hidden)} />
      </div>
      <div className={hidden ? "hidden" : "grid grid-cols-8 mb-4"}>
        {content.map((cell, index) =>
          <Cell key={index} type={type} name={cell.name} desc={cell.desc} />
        )}
      </div>
    </div>
  );
}
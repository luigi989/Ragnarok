import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Test } from '../interfaces';
import Cell from './cell';
import Heading from './heading';

export interface GridAreaProps {
  data: Array<Test>;
  type: string;
}

export default function GridArea({ data, type } : GridAreaProps) {
  const [content, setContent] = useState(data);
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <Heading text={type} hidden={hidden} onClick={() => setHidden(!hidden)} />
      <div className={hidden ? "hidden" : "grid grid-cols-8 mb-4"}>
        {content.map((cell, index) =>
        <Link to={cell.name} state={{data: cell, type: type}} key={index}>
          <Cell key={index} type={type} name={cell.name} desc={cell.desc} />
        </Link>
        )}
      </div>
    </div>
  );
}
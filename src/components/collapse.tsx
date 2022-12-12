import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export interface CollapseProps {
    hidden: boolean;
    onClick: () => void;
}

export default function Collapse({ hidden, onClick }: CollapseProps) {
    return (
        <div className='text-black' onClick={onClick}>
            <div className='p-1 rounded-full bg-blue-200'>
                {hidden ? <BsChevronDown /> : <BsChevronUp /> }
            </div>
        </div>
    );
} 
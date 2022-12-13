import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export interface CollapseProps {
    hidden: boolean;
    onClick: () => void;
}

export default function Collapse({ hidden, onClick }: CollapseProps) {
    return (
        <div className='p-2 rounded-r-3xl cursor-pointer hover:bg-textPrimary hover:text-bgAccent' onClick={onClick}>
            {hidden ? <BsChevronDown /> : <BsChevronUp />}
        </div>
    );
} 
import Collapse from './collapse';

export interface HeadingProps {
    text: string;
    hidden: boolean;
    onClick: () => void;
}

export default function Heading({ text, hidden, onClick }: HeadingProps) {    
    return (
        <div className='flex items-center gap-3 pl-2 mb-2 rounded-3xl bg-bgAccent w-fit text-textPrimary'>
            <h1 className='text-2xl first-letter:uppercase'>{text}</h1>
            <Collapse hidden={hidden} onClick={onClick} />
        </div>
    );
} 
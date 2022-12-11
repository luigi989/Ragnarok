export interface GridTitleProps {
  name: string;
  onClick: () => void;
}

export default function GridTitle({ name, onClick }: GridTitleProps) {
  return (
    <div onClick={onClick} className="text-2xl text-yellow-600 ml-3 hover:cursor-pointer w-fit">
      <h1 className="my-2 first-letter:uppercase">{name}</h1>
      {/* <img src={arrowRight} alt="arrowRight" /> */}
    </div>
  );
}
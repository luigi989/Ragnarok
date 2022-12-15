export interface CellProps {
  type: string;
  name: string;
  desc: string;
}

export default function Cell({ type, name, desc} : CellProps) {  
  return (
    <div className="group relative cursor-pointer transition ease-linear duration-300
                    overflow-hidden w-fit text-textPrimary">
      <div className='absolute h-full w-full z-[20]
                    border-[#9c5518] border-solid border-0 group-hover:border-4' />
      <img src={"/images/" + type + "/" + name + ".webp"} alt={name} />
      <h1 className='absolute top-0 left-0 py-1 px-2 bg-[#9c5518]'>{name}</h1>
    </div>
  );
}
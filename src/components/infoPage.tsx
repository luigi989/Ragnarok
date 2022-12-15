import { useLocation } from "react-router-dom";

export default function InfoPage() {
    const location = useLocation();
    const data = location.state.data;
    const type = location.state.type;

    return(
        <div className="w-11/12 mx-auto">
            <div className="flex gap-3">
            <img src={"/images/" + type + "/" + data.name + ".webp"} alt={data.name} />
            <p className="text-textPrimary first-letter:text-2xl">{data.desc}</p>
            </div>
        </div>
    );
}
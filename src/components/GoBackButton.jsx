import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom"

function GoBackButton(){

    const navigate = useNavigate();

    return(
        <button onClick={() => navigate(-1)}
        className="text-white border-2 border-slate-400 bg-zinc-900 p-2
        rounded-lg cursor-pointer select-none font-inter flex justify-center items-center
        hover:scale-105 duration-300 transition-transform will-change-transform'">
            <ArrowLeft color="white"/>
            <p className="text-white">Go Back</p>
        </button>
    );
}

export default GoBackButton;
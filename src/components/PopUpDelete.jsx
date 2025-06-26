import { X } from "lucide-react";

function PopUpDelete({text, error, onClick}){

    return(
        <div className="absolute top-10 z-20 bg-zinc-900 p-4 rounded-lg 
        shadow-[0px_10px_20px] shadow-purple-950 border-2 border-gray-800">
            <div className="absolute right-2 top-2 flex justify-end cursor-pointer">
                <X onClick={onClick}/>
            </div>
            <div className="p-3 text-white">
                <div>
                    <p className="text-2xl">{text}</p>
                </div>
                <div className="text-center">
                    <p>{error}</p>
                </div>
            </div>
        </div>
    );
}

export default PopUpDelete;
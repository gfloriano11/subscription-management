import { X } from "lucide-react";

function PopUp({error}){

    return(
        <div className="absolute top-1/2 z-20 bg-zinc-900 p-4 rounded-lg 
        shadow-[0px_10px_20px] shadow-purple-950 border-2 border-gray-800">
            <div className="absolute right-2 top-2 flex justify-end cursor-pointer">
                <X/>
            </div>
            <div className="pt-2 p-2">
                <p className="text-white">{error}</p>
            </div>
        </div>
    );
}

export default PopUp;
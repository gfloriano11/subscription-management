import { ArrowRight } from "lucide-react";

function NextPageButton(){
    return(
        <button className="w-full flex justify-center group hover:cursor-pointer bg-violet-700 hover:bg-violet-800 text-white font-medium py-3 rounded-md transition">
            <ArrowRight className="transition-transform duration-500 group-hover:translate-x-2 group-hover:scale-115 "/>
        </button>
    )
}

export default NextPageButton;
import { ArrowLeft, ArrowRight } from "lucide-react";

function PageButton({onClick, nextPage}){

    if(nextPage){
        return(
            <button className="w-full flex justify-center group hover:cursor-pointer bg-violet-700 hover:bg-violet-800 text-white font-medium py-3 rounded-md transition"
            onClick={onClick}>
                <ArrowRight className="transition-transform duration-500 group-hover:translate-x-1 group-hover:scale-110"/>
            </button>
        )
    }

    return(
        <button className="w-full flex justify-center group hover:cursor-pointer bg-gray-700 hover:bg-gray-800 text-white font-medium py-3 rounded-md transition"
        onClick={onClick}>
            <ArrowLeft className="transition-transform duration-500 group-hover:-translate-x-1 group-hover:scale-110 "/>
        </button>
    )
}

export default PageButton;
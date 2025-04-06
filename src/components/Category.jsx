import { useNavigate } from "react-router-dom";

function Category({id, text}){

    const navigate = useNavigate();
    return(
        <button id={id}
        onClick={() => navigate('teste')}
        className="flex justify-center w-58 bg-zinc-900 p-4 rounded-lg 
        shadow-[0px_10px_20px] shadow-purple-950 border-2 border-gray-800 
        gap-2.5 text-white font-inter font-light cursor-pointer select-none hover:scale-105">
            <p className="font-inter text-3xl font-medium">{text}</p>
        </button>
    );
}

export default Category;
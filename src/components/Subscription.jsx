import { Link } from "react-router-dom";

function Subscription({id, text, path, image}){

    return(
        <Link
        id={id}
        to={path}
        state={{subscription: text}} 
        className="group relative border-2 border-gray-700 bg-white 
        rounded-3xl flex flex-col cursor-pointer overflow-hidden transition-all duration-300 
        h-36 w-65 hover:scale-101 will-change-transform">
            <div className="w-full h-full select-none pointer-events-none flex items-center">
                <img className="pointer-events-none center object-cover w-full h-full" src={image}></img>
            </div>
            <div className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 
            flex justify-center bg-zinc-900 p-0.5 transition-all duration-500
            ease-in-out select-none">
                <p className="text-white text-lg tracking-wide">{text}</p>
            </div>
        </Link>
    );
}

export default Subscription;
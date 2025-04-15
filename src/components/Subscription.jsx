function Subscription({id, text, path, image}){

    return(
        <div id={id} className="group relative border-2 border-gray-700 bg-gray-800 
        rounded-3xl flex flex-col cursor-pointer overflow-hidden transition-all duration-300 
        h-36 hover:scale-102">
            <div className="w-60 h-full select-none pointer-events-none flex items-center">
                <img className="rounded-tl-3xl rounded-tr-3xl pointer-events-none center object-cover h-36" src="\src\assets\subscription_image\netflix.png"></img>
            </div>
            <div className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 
            flex justify-center bg-zinc-900 p-0.5 transition-all duration-500
            ease-in-out select-none">
                <p className="text-white text-lg tracking-wide">{text}</p>
            </div>
        </div>
    );
}

export default Subscription;
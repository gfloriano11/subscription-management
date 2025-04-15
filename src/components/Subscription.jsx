function Subscription({id, text, path}){

    return(
        <div id={id} className="group relative border-2 border-gray-700 bg-gray-800 
        rounded-3xl flex flex-col cursor-pointer overflow-hidden transition-all duration-500 
        h-36">
            <div className="w-60 h-full select-none pointer-events-none flex items-center">
                <img className="rounded-tl-3xl rounded-tr-3xl pointer-events-none center object-cover h-40" src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png"></img>
            </div>
            <div className="absolute bottom-0 w-full opacity-0 group-hover:opacity-100 
            flex justify-center bg-zinc-900 p-0.5 transition-all duration-500
            ease-in-out">
                <p className="text-white text-lg tracking-wide">Netflix</p>
            </div>
        </div>
    );
}

export default Subscription;
function Subscription({id, text, path}){

    return(
        <div id={id} className="border-2 border-gray-700 bg-gray-800 rounded-3xl flex flex-col cursor-pointer">
            <div className="w-50 select-none pointer-events-none">
                <img className="rounded-tl-3xl rounded-tr-3xl pointer-events-none" src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png"></img>
            </div>
            <div className="w-full text-center rounded-bl-3xl rounded-br-3xl">
                <p className="text-white select-none">{text}</p>
            </div>
        </div>
    );
}

export default Subscription;
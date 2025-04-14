function Subscription({id, text, path}){

    return(
        <div id={id} className="border-2 border-white rounded-3xl flex flex-col">
            <div className="w-50">
                <img className="rounded-3xl" src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png"></img>
            </div>
            <div className="text-center">
                <p className="text-white">{text}</p>
            </div>
        </div>
    );
}

export default Subscription;
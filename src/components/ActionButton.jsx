function ActionButton({color, text}){

    return(
        <div className="w-1/3 flex justify-center">
            <button className={`${color} w-full rounded-[5px] cursor-pointer`}>
                <p>{text}</p>
            </button>
        </div>
    );
}

export default ActionButton;
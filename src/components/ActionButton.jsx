function ActionButton({color, text, Icon, onClick}){

    return(
        <div className="w-1/3 flex justify-center">
            <button className={`${color} w-full rounded-[5px] cursor-pointer flex justify-center items-center gap-1`}
            onClick={onClick}>
                {Icon && <Icon size={18}/>}
                <p>{text}</p>
            </button>
        </div>
    );
}

export default ActionButton;
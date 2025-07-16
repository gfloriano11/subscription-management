function EnterButton({text}){
    return(
        <button className="w-full hover:cursor-pointer bg-violet-700 hover:bg-violet-800 text-white font-medium py-3 rounded-md transition">
            <p>{text}</p>
        </button>
    )
}

export default EnterButton;
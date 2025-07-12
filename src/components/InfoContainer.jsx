function InfoContainer({icon, text, border, shadow, background}){
    return(
        <div className="w-3/5 min-w-50 max-w-85 h-40 gap-3 flex flex-col justify-around items-center bg-gray-50 p-4 rounded-md">
            <div className={`w-12 max-w-12 min-h-12 rounded-3xl shadow-md ${shadow} flex justify-center items-center border ${background} ${border}`}>{icon}</div>
            <div className="text-center font-light w-full font-inter rounded-md text-black"><p>{text}</p></div>
        </div>
    )
}

export default InfoContainer;
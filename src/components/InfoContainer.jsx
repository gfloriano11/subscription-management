function InfoContainer({icon, text, border, shadow, background}){
    return(
        <div className="w-3/5 h-40 flex flex-col justify-around items-center bg-gray-100 p-4 rounded-md">
            <div className={`max-w-12 w-full h-12 rounded-3xl shadow-md ${shadow} flex justify-center items-center border ${background} ${border}`}>{icon}</div>
            <div className="text-center w-full rounded-md text-black"><p>{text}</p></div>
        </div>
    )
}

export default InfoContainer;
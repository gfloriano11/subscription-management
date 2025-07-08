function InfoContainer({icon, text}){
    return(
        <div className="w-3/5 flex flex-col items-center relative">
            <div className="absolute -top-5 max-w-12 w-full h-12 rounded-3xl bg-gray-200 shadow-md shadow-gray-400 flex justify-center items-center border border-neutral-700">{icon}</div>
            <div className="bg-gray-200 pt-5 text-center w-full rounded-md text-black"><p>{text}</p></div>
        </div>
    )
}

export default InfoContainer;
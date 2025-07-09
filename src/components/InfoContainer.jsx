function InfoContainer({icon, text}){
    return(
        <div className="w-3/5 h-40 flex flex-col justify-around items-center bg-gray-200 p-4 rounded-md">
            <div className="max-w-12 w-full h-12 rounded-3xl shadow-md shadow-gray-400 flex justify-center items-center border bg-blue-100 border-neutral-300">{icon}</div>
            <div className="text-center w-full rounded-md text-black"><p>{text}</p></div>
        </div>
    )
}

export default InfoContainer;
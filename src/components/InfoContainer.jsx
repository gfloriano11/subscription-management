function InfoContainer({icon, text}){
    return(
        <div>
            <div className="max-w-12 h-12 rounded-3xl bg-gray-300 flex justify-center items-center">{icon}</div>
            <div className="bg-gray-300"><p>{text}</p></div>
        </div>
    )
}

export default InfoContainer;
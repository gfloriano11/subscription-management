function Input({type, name, value}){
    return(
        <input 
        type={type} 
        name={name} 
        value={value}
        className="bg-white p-1.5 flex items-center text-black
        rounded-xl"/>
    )
}

export default Input
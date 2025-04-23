function Input({type, name, custom}){

    if(custom === 0){
        return(
            <input 
            type={type} 
            name={name} 
            value='oi'
            className="bg-white p-1.5 flex items-center text-black
            rounded-xl"/>
        )
    }

    return(
        <input 
        type={type} 
        name={name} 
        value='cu'
        className="bg-white p-1.5 flex items-center text-black
        rounded-xl"/>
    )
}

export default Input
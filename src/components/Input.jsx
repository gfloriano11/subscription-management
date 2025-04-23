function Input({type, name, value, custom, onChange}){

    return(
        <input 
        type={type} 
        name={name} 
        value={value}
        readOnly={custom}
        onChange={onChange}
        className="bg-white p-1.5 flex items-center text-black
        rounded-xl"/>
    )
}

export default Input
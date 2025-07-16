function Input({type, placeholder}){
    return(
        <input
            className="p-3 rounded-md bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-700" 
            type={`${type}`}
            placeholder={`${placeholder}`}
        />
    )
}

export default Input;
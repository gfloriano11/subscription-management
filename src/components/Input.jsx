function Input({type, name, value, custom, onChange, children}){
    
    let permission = "bg-slate-400 cursor-not-allowed"
    if(custom === true){
        permission = 'bg-slate-200'
    }

    if (type === "select") {
        return (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={`${permission} p-1.5 flex items-center text-black rounded-lg outline-none w-full`}
          >
            {children}
          </select>
        );
      }

    return(
        <input 
        type={type} 
        name={name} 
        value={value}
        readOnly={!custom}
        onChange={onChange}
        className={`${permission} p-1.5 flex items-center text-black
        rounded-lg outline-none w-full`}/>
    )
}

export default Input
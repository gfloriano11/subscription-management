function Input({type, name, value, custom, onChange, children}){
    
    let permission = "bg-slate-400 cursor-not-allowed"
    if(custom === true){
        permission = 'bg-slate-200 focus:h-10'
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
        className={`${permission} p-1.5 h-9 items-center text-black
        rounded-lg outline-none w-full duration-500 ease-in-out transition-all`}/>
    )
}

export default Input
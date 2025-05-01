function Input({type, name, value, custom, onChange, children, ref}){
    
    let permission = "bg-slate-400 cursor-not-allowed"
    if(custom === 1){
        permission = 'bg-slate-200'
    }

    if (type === "select") {
        return (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className={`${permission} p-1.5 flex items-center text-black rounded-lg outline-none w-full`}
            ref={ref}
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
        ref={ref}
        className={`${permission} p-1.5 h-9 items-center text-black
        rounded-lg outline-none w-full`}/>
    )
}

export default Input
import { Eye, EyeClosed } from "lucide-react";

function Input({type, name, value, placeholder, showPass, setShowPass, onChange, children, error}){

    const defaultStyle = `w-full p-3 rounded-md bg-slate-800 text-white outline-red-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-700`;
    const errorStyle = `transition-all duration-500 w-full p-3 rounded-md bg-slate-800 text-white outline-1 outline-red-800 placeholder-gray-400 focus:outline-red-800`;

    if (type === "select"){
        return (
          <select
            onChange={onChange}
            value={value}
            className={error ? errorStyle : `h-12 ${defaultStyle}`}
          >
            {children}
          </select>
        );
    }

    if(type=='password'){

        if(showPass){
            type='text'
        }

        return(
        <div className={`flex items-center ${error ? errorStyle : `${defaultStyle} focus-within:ring-2 focus-within:ring-violet-700`}`}>
            <input
                name={name}
                className="w-full text-white placeholder-gray-400 focus:outline-none"
                type={`${type}`}
                placeholder={`${placeholder}`}
                value={value}
                onChange={onChange}
            />
            {showPass
            ?
            <EyeClosed className="hover:cursor-pointer"
            onClick={(() => setShowPass(false))}/>
            :
            <Eye className="hover:cursor-pointer"
            onClick={(() => setShowPass(true))}/>
            }
        </div>
        
    )
    }
    return(
        <input
            name={name}
            className={error ? errorStyle : defaultStyle}
            type={`${type}`}
            placeholder={`${placeholder}`}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input;
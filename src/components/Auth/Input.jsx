import { Eye, EyeClosed } from "lucide-react";

function Input({type, name, value, placeholder, showPass, setShowPass, onChange, children}){

    if (type === "select"){
        return (
          <select
            onChange={onChange}
            className="w-full p-3 rounded-md bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-700" 
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
        <div className="flex items-center p-3 rounded-md bg-slate-800 focus-within:ring-2 focus-within:ring-violet-700">
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
            className="w-full p-3 rounded-md bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-700" 
            type={`${type}`}
            placeholder={`${placeholder}`}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input;
import { Eye, EyeClosed } from "lucide-react";

function Input({type, placeholder, password, showPass, setShowPass}){

    if(password){

        if(showPass){
            type='text'
        }

        return(
        <div className="flex items-center p-3 rounded-md bg-slate-800 focus-within:ring-2 focus-within:ring-violet-700">
            <input
                className="w-full text-white placeholder-gray-400 focus:outline-none"
                type={`${type}`}
                placeholder={`${placeholder}`}
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
            className="w-full p-3 rounded-md bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-700" 
            type={`${type}`}
            placeholder={`${placeholder}`}
        />
    )
}

export default Input;
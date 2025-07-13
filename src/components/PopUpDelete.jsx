import { X } from "lucide-react";
import ActionButton from "./ActionButton";
import { useNavigate } from "react-router-dom";

function PopUpDelete({id, text, error, onClick}){

    const navigate = useNavigate();

    async function handleDelete(id){
        
        const response = await fetch(`http://localhost:8000/my-subscriptions/${id}`, {
            method: 'DELETE',
            headers : {
                'Content-Type': 'application/json' 
            }
        })

        if(!response.ok){
            throw new Error(`Cannot delete subscription with id: ${id}`);
        }

        navigate('/home');
    }

    return(
        <div className="absolute top-30 z-20 bg-zinc-900 p-4 rounded-lg 
        shadow-[0px_10px_20px] shadow-purple-950 border-2 border-gray-800">
            <div className="absolute right-2 top-2 flex justify-end cursor-pointer">
                <X color="white" onClick={onClick}/>
            </div>
            <div className="p-3 text-white">
                <div>
                    <p className="text-2xl">{text}</p>
                </div>
                <div className="text-center">
                    <p>{error}</p>
                </div>
                <div className="flex justify-around pt-2">
                    <ActionButton text="Delete" color="bg-red-700" onClick={() => handleDelete(id)}/>
                    <ActionButton text="Cancel" color="bg-indigo-900" onClick={onClick}/>
                </div>
            </div>
        </div>
    );
}

export default PopUpDelete;
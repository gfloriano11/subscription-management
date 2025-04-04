import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AddSubscriptionButton(){
    const navigate = useNavigate();

    return(
        <button className='text-white border-2 border-slate-400 bg-zinc-900 p-2
        rounded-lg cursor-pointer select-none font-inter flex justify-center items-center
        hover:scale-105 duration-1000 transition-transform will-change-transform'
        onClick={() => navigate('add')}>
            <Plus color="white"></Plus>
            Add Subscription
        </button>
    );
}

export default AddSubscriptionButton;
import { Plus } from "lucide-react";

function AddSubscription(){
    return(
        <button className='text-white border-2 border-slate-300 bg-zinc-900 p-2
        rounded-lg cursor-pointer select-none font-inter flex justify-center items-center'>
            <Plus color="white"></Plus>
            Add Subscription
        </button>
    );
}

export default AddSubscription;
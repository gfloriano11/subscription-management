import { Plus } from "lucide-react";

function AddSubscription({form, setForm}){

    return(
        <button className='text-white border-2 border-slate-400 bg-zinc-900 p-2
        rounded-lg cursor-pointer select-none font-inter flex justify-center items-center
        hover:scale-105 duration-1000 transition-transform will-change-transform'
        onClick={() => setForm(!form)}>
            <Plus color="white"></Plus>
            Add Subscription
        </button>
    );
}

export default AddSubscription;
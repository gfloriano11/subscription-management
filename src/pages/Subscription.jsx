import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";
import SubscriptionInfo from "../components/SubscriptionInfo";
import SubscriptionEditForm from "../components/SubscriptionEditForm";
import PopUpDelete from "../components/PopUpDelete";

function Subscription(){

    const [edit, setEdit] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState('');

    const [subscription, setSubscription] = useState({});

    const { pathname } = useLocation()

    const path = pathname.split('/');
    const id = path[3];

    async function getSubscription(id){


        const response = await fetch(`http://localhost:8000/my-subscriptions/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await response.json();

        let categoryNameClean = removeEmojis(data[0].category_name);
        data[0].category_name = categoryNameClean;

        setSubscription(data[0]);
    }

    function removeEmojis(str) {
        return str.replace(/[\p{Emoji_Presentation}\p{Emoji}\uFE0F]/gu, '').trim();
    }

    useEffect(() => {
        getSubscription(id);
    }, [])
    return(
        <section className="flex flex-col items-center gap-5 mt-5">
            <div className="bg-zinc-900 p-4 rounded-lg 
            shadow-[0px_10px_20px] shadow-purple-950 border-2 border-gray-800 
            text-white font-inter flex flex-col md:flex-row gap-3">
                <div className="relative flex items-center md:h-64">
                    <img className="bg-black rounded-xl w-full max-h-64 md:max-w-md select-none pointer-events-none" src={subscription.image}></img>
                    <p className="absolute bottom-4 left-4 text-3xl font-bold tracking-wide">{subscription.subscription_name}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                    {edit 
                    ? 
                    <SubscriptionEditForm subscription={subscription} setSubscription={setSubscription} setEdit={setEdit}/>
                    :
                    <SubscriptionInfo subscription={subscription} setEdit={setEdit} setConfirmDelete={setConfirmDelete}/>
                    }
                </div>
            </div>
            {confirmDelete !== '' &&(
                <PopUpDelete
                id={subscription.id}
                text="Do you really want to delete this subscription?"
                onClick={() => (setConfirmDelete(''))}/>
            )}
            <div className="flex justify-center">
                <GoBackButton/>
            </div>
        </section>
    );
}

export default Subscription;
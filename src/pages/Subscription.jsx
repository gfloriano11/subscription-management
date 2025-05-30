import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ActionButton from "../components/ActionButton";
import { Pencil, Trash2 } from "lucide-react";
import GoBackButton from "../components/GoBackButton";

function Subscription(){

    const [subscription, setSubscription] = useState([]);

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

        console.log(data);

        setSubscription(data[0]);
    }

    useEffect(() => {
        getSubscription(id);
    }, [])

    return(
        <section className="flex flex-col gap-5 mt-5">
            <div className="bg-zinc-900 p-4 rounded-lg 
            shadow-[0px_10px_20px] shadow-purple-950 border-2 border-gray-800 
            text-white font-inter flex flex-col md:flex-row gap-3">
                <div className="relative">
                    <img className="rounded-xl max-w-xs max-h-64 md:max-w-md select-none pointer-events-none" src={subscription.image}></img>
                    <p className="absolute bottom-4 left-4 text-3xl font-bold tracking-wide">{subscription.subscription_name}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                    <div className="grid grid-cols-2 md:text-start gap-x-3 gap-y-3">
                        <div>
                            <p>📊 Status: Active</p>
                            <p>⏰ Plan: 6 months</p>
                        </div>
                        <div>
                            <p>💵 Price: R$ {subscription.price}</p>
                            <p>💳 Method: {subscription.payment_method}</p>
                        </div>
                        <div>
                            <p>📅 Start: 06/27/2025</p>
                            <p>📅 End: 06/27/2026</p>
                        </div>
                        <div>
                            <p>🙍 Users: {subscription.users} user(s)</p>
                            <p>📁 Category: {subscription.category_id}</p>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-gray-800 rounded-md text-gray-300 italic max-w-md">
                        {subscription.description || "Sem descrição."}
                    </div>
                    <div className="pr-2 flex justify-around w-full">
                        <ActionButton text="Edit" color="bg-green-600" Icon={Pencil}/>
                        <ActionButton text="Delete" color="bg-red-600" Icon={Trash2}/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <GoBackButton/>
            </div>
        </section>
    );
}

export default Subscription;
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
        <div>
            <div className="bg-zinc-900 p-4 rounded-lg 
            shadow-[0px_10px_20px] shadow-purple-950 border-2 border-gray-800 
            text-white font-inter flex flex-col gap-3">
                <div className="max-w-xs md:max-w-xl select-none pointer-events-none">
                    <img className="rounded-xl" src="\src\assets\subscription_image\netflix.png"></img>
                </div>
                <div className="text-center font-medium text-2xl tracking-wide">
                    <p>{subscription.subscription_name}</p>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p>Stats:</p>
                    </div>
                    <div className="flex bg-gray-700 w-px"></div>
                    <div>
                        <p>oiiiiiiii</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Subscription;
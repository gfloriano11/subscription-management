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
        <section>
            <div className="bg-zinc-900 p-4 rounded-lg 
            shadow-[0px_10px_20px] shadow-purple-950 border-2 border-gray-800 
            text-white font-inter flex flex-col md:flex-row gap-3">
                <div className="relative">
                    <img className="rounded-xl max-w-xs md:max-w-md select-none pointer-events-none " src="\src\assets\subscription_image\netflix.png"></img>
                    <p className="absolute bottom-4 left-4 text-3xl font-bold tracking-wide">{subscription.subscription_name}</p>
                </div>
                <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col justify-between gap-3">
                        <div className="flex flex-col">
                            <p>Stats: Active</p>
                            <p>Day for Payment: 06/27/2025</p>
                            <p>Payment Method: Credit Card</p>
                        </div>
                        <div className="pr-2 flex flex-col items-center">
                            <button>Editar</button>
                            <button>Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subscription;
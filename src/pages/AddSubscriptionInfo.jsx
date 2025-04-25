import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SubscriptionForm from "../components/SubscriptionForm";
import GoBackButton from "../components/GoBackButton";

function AddSubscriptionInfo(){

    const [subscription, setSubscription] = useState({});

    const location = useLocation();
    const id = location.state.id;

    async function getSubscriptionById(id){


        const response = await fetch(`http://localhost:8000/subscription/id/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });

        if(!response.ok){
            throw new Error('Error to fetch subscription information', response);
        }

        const data = await response.json();
        setSubscription(data[0]);
    }

    useEffect(() => {
        getSubscriptionById(id);
    }, []);

    return(
        <div className="text-white flex flex-col items-center">
            <div className="text-white flex flex-col items-center gap-6">
                <div>
                    <img></img>
                </div>
                <div className="flex justify-center">
                    <SubscriptionForm
                    subscription={subscription}/>
                </div>
                <div>
                    <GoBackButton/>
                </div>
            </div>
        </div>
    );
}

export default AddSubscriptionInfo;
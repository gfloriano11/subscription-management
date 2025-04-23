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
        <div className="text-white">
            <div>
                <p>add {subscription.subscription_name} information:</p>
            </div>
            <div className="text-white">
                <p>{subscription.subscription_name}</p>
                <div>
                    <img></img>
                </div>
                <div>
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
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Subscription from '../components/Subscription';
import CreateSubscriptionForm from '../components/CreateSubscriptionForm'
import GoBackButton from '../components/GoBackButton';

function AddSubscription(){

    const [subscriptions, setSubscriptions] = useState([]);

    const location = useLocation();
    const { pathname } = location;
    const uri = pathname.split('/');
    const category = uri[3];

    const categories = ['streaming', 'games', 'education', 'music', 'healthcare', 'custom'];

    async function getSubscription(){

        try{
            const response = await fetch(`http://localhost:8000/subscription/${category}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })

            if(!response.ok){
                throw new Error('Error to fetch, subscriptions');
            }

            let data = await response.json();

            setSubscriptions(data);

        } catch (error){
            console.error(error);
        }
    }

    useEffect(() => {
        if(categories.includes(category)){
            getSubscription();
        }
    }, [category]);

    if(!categories.includes(category)){
        return(
            <p className='text-white'>erro</p>
        )
    }

    return(
        <div className='flex flex-col items-center gap-6'>
            <div>
                <h1 className='text-white mt-5 text-2xl font-inter'>Add Your Subscription:</h1>
            </div>
            <div>
                {subscriptions.map((subscription) => (
                    <Subscription
                    key={subscription.id}
                    id={subscription.id}
                    text={subscription.subscription_name}
                    path={subscription.subscription_path}
                    image={subscription.image}
                    />
                ))}
            </div>
            <CreateSubscriptionForm/>
            <div>
                <GoBackButton/>
            </div>
        </div>
    )
}

export default AddSubscription;
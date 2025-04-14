import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CreateSubscriptionForm from '../components/CreateSubscriptionForm'
import GoBackButton from '../components/GoBackButton';

function AddSubscription(){

    const [subscriptions, setSubscriptions] = useState([]);

    const location = useLocation();
    const { pathname } = location;
    const uri = pathname.split('/');
    const category = uri[3];

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

    if(category !== 'custom'){
        if(category === 'streaming' || category === 'games' || category === 'education' || category === 'music' || category === 'healthcare'){

        } else {
            return(
                <p className='text-white'>erro</p>
            )
        }
    }

    useEffect(() => {
        getSubscription();
    }, []);

    return(
        <div className='flex flex-col items-center gap-6'>
            <div>
                <h1 className='text-white mt-5 text-2xl font-inter'>Add Your Subscription:</h1>
            </div>
            <CreateSubscriptionForm/>
            <div>
                <GoBackButton/>
            </div>
        </div>
    )
}

export default AddSubscription;
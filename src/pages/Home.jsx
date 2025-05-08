import { useEffect, useState } from 'react'

import SubscriptionCard from '../components/SubscriptionCard'
import AddSubscription from '../components/AddSubscriptionButton'

function Home(){

    const [subscriptions, setSubscriptions] = useState([]);

    async function getSubscriptions(){

        try{
            const response = await fetch(`http://localhost:8000/my-subscriptions`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application-json'
                }
            })
    
            if(!response.ok){
                throw new Error('Can not get your account subscriptions');
            }
    
            let data = await response.json();
            setSubscriptions(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getSubscriptions();
    })

    return(
        <div className='flex flex-col items-center gap-6'>
            <div className='flex justify-center items-center'>
                <h1 className='text-white mt-5 text-2xl font-inter'>Your subscriptions:</h1>
            </div>
            <div className='flex justify-center'>
                <AddSubscription/>
            </div>
            <div className='flex justify-center'>
                {subscriptions.map((subscription) => (
                    <SubscriptionCard/>
                ))}
            </div>
        </div>
    )
}

export default Home;
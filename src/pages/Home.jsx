import { useEffect, useState } from 'react'

import SubscriptionCard from '../components/SubscriptionCard'
import AddSubscription from '../components/AddSubscriptionButton'
import { useNavigate } from 'react-router-dom';

function Home(){

    const navigate = useNavigate();
    const [subscriptions, setSubscriptions] = useState([]);
    
    const token = localStorage.getItem('token');

    async function getSubscriptions(){

        try{
            const response = await fetch(`http://localhost:8000/my-subscriptions`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            
            console.log(response.status);
            if(response.status !== 200){
                navigate('/login');
            }

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
    }, [])

    return(
        <div className='flex flex-col items-center gap-6'>
            <div className='flex justify-center items-center'>
                <h1 className='text-white mt-5 text-2xl font-inter'>Your subscriptions:</h1>
            </div>
            <div className='flex justify-center'>
                <AddSubscription/>
            </div>
            <div className='flex flex-col gap-5 md:grid xmd:grid-cols-3 md:grid-cols-2 justify-center'>
                {subscriptions.map((subscription) => (
                    <SubscriptionCard
                    key={subscription.id}
                    id={subscription.id}
                    subscriptionName={subscription.subscription_name}
                    subscriptionPrice={subscription.price}
                    symbol={subscription.symbol}
                    logo={subscription.logo}
                    path={subscription.subscription_path}/>
                ))}
            </div>
        </div>
    )
}

export default Home;
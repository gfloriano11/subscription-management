import { useState } from 'react'

import SubscriptionCard from '../components/SubscriptionCard'
import AddSubscription from '../components/AddSubscription'

function Home(){

    return(
        <div className='flex flex-col items-center gap-6'>
            <div className='flex justify-center items-center'>
                <h1 className='text-white mt-5 text-2xl font-inter'>Your subscriptions:</h1>
            </div>
            <div className='flex justify-center'>
                <AddSubscription/>
            </div>
            <div className='flex justify-center'>
                <SubscriptionCard/>
            </div>
        </div>
    )
}

export default Home;
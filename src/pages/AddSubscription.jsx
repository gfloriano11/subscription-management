import { useLocation, useParams } from 'react-router-dom';
import CreateSubscriptionForm from '../components/CreateSubscriptionForm'

function AddSubscription(){

    const location = useLocation();
    const { pathname } = location;
    const uri = pathname.split('/');
    const category = uri[3];

    if(category !== 'custom'){
        console.log('não é custom');
        if(category === 'streaming' || category === 'games' || category === 'education' || category === 'music' || category === 'healthcare'){
            console.log('é fixo');
        } else {
            return(
                <p className='text-white'>erro</p>
            )
        }
    } else {
        console.log('é custom');
    }

    return(
        <div className='flex flex-col items-center gap-6'>
            <div>
                <h1 className='text-white mt-5 text-2xl font-inter'>Add Your Subscription:</h1>
            </div>
            <CreateSubscriptionForm/>
        </div>
    )
}

export default AddSubscription;
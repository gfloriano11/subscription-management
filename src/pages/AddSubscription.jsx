import { useLocation, useParams } from 'react-router-dom';
import CreateSubscriptionForm from '../components/CreateSubscriptionForm'
import GoBackButton from '../components/GoBackButton';

function AddSubscription(){

    const location = useLocation();
    const { pathname } = location;
    const uri = pathname.split('/');
    const category = uri[3];

    if(category !== 'custom'){
        if(category === 'streaming' || category === 'games' || category === 'education' || category === 'music' || category === 'healthcare'){

            async function getSubscription(){

                try{
                    const response = await fetch(`http://localhost:8000/`, {
                        method: 'GET',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: {
                            categoryId: '1'
                        }
                    })

                } catch (error){
                    console.error(error);
                }
            }
        } else {
            return(
                <p className='text-white'>erro</p>
            )
        }
    }

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
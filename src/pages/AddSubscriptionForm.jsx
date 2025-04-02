import Form from '../components/Form'

function AddSubscriptionForm(){

    return(
        <div className='flex flex-col items-center gap-6'>
            <div>
                <h1 className='text-white mt-5 text-2xl font-inter'>Add Your Subscription:</h1>
            </div>
            <Form/>
        </div>
    )
}

export default AddSubscriptionForm;
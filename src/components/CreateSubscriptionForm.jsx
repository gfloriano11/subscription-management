import Input from './Input';

function CreateSubscriptionForm(){

    return(
        <form className="p-4 rounded-lg h-fit flex justify-center bg-slate-900 border-2 border-gray-500">
             <div className="flex flex-col">
                <label className="text-white" htmlFor="subscription_name">Nome:</label>
                <Input type="text"/>
            </div>
            <div>
                
            </div>
        </form>
    )
}

export default CreateSubscriptionForm;
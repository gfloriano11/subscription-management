function SubscriptionForm(){

    return(
        <div className="bg-slate-800 border-1 border-gray-700 rounded-lg">
            <form className="p-3">
                <div className="flex flex-col">
                    <label htmlFor="subscription-name">Subscription:</label>
                    <input 
                    type="text" 
                    name="subscription-name" 
                    value="Netflix"
                    className="bg-white p-1.5 flex items-center text-black
                    rounded-xl"/>
                </div>
                <div>
                    <label htmlFor="subscription-value">Price:</label>
                    <input type="text" name="subscription-value" value="USD 12"/>
                </div>
            </form>
        </div>
    );
}

export default SubscriptionForm;
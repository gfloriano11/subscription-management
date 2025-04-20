function SubscriptionForm(){

    return(
        <div className="bg-slate-800 border-1 border-gray-700 rounded-lg">
            <form>
                <div>
                    <label htmlFor="subscription-name">Subscription:</label>
                    <input type="text" name="subscription-name" value="Netflix"/>
                </div>
            </form>
        </div>
    );
}

export default SubscriptionForm;
import { useEffect, useState } from "react";
import Input from "./Input";

function SubscriptionForm({subscription}){

    const [name, setName] = useState('');
    const [isCustom, setIsCustom] = useState(1);

    useEffect(() => {
        if (subscription) {
            setName(subscription.subscription_name);
            setIsCustom(subscription.is_custom);
        }
    }, [subscription]);

    return(
        <div className="bg-slate-800 border-1 border-gray-700 rounded-lg">
            <form className="p-3 text-white">
                <div className="flex flex-col">
                    <label htmlFor="subscription-name">Subscription:</label>
                    <Input
                    type="text"
                    name="subscription-name"
                    custom={isCustom}
                    value={name}
                    onChange={(event) => setName(event.target.value)}/>
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
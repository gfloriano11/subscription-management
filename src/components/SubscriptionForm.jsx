import { use, useEffect, useState } from "react";
import Input from "./Input";

function SubscriptionForm({subscription}){

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [isCustom, setIsCustom] = useState(1);

    useEffect(() => {
        if (subscription) {
            setName(subscription.subscription_name);
            setIsCustom(subscription.is_custom);
        }
    }, [subscription]);

    return(
        <div className="flex bg-slate-800 border-1 border-gray-700 rounded-lg
        w-3/4">
            <div className="w-1/2 select-none pointer-events-none">
                <img className="rounded-lg" src="\src\assets\subscription_image\netflix.png"></img>
            </div>
            <form className="p-3 text-white">
                <div className="flex flex-col">
                    <label htmlFor="subscription-name">Subscription Name:</label>
                    <Input
                    type="text"
                    name="subscription-name"
                    custom={isCustom}
                    value={name}
                    onChange={(event) => setName(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="subscription-value">Price:</label>
                    <Input
                    type="text"
                    name="subscription-value"
                    custom={true}
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}/>
                </div>
            </form>
        </div>
    );
}

export default SubscriptionForm;
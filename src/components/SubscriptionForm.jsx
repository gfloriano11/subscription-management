import { use, useEffect, useState } from "react";
import Input from "./Input";

function SubscriptionForm({subscription}){

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [isCustom, setIsCustom] = useState(1);
    const [error, setError] = useState('');

    function verifyPrice(price){
        const value = price.target.value;

        setPrice(value)

        if(isNaN(value) || value < 0){
            setError('Please, write a valid number.');
        } else {
            setError('');
        }
    }

    useEffect(() => {
        if (subscription) {
            setName(subscription.subscription_name || '');
            setIsCustom(subscription.is_custom || 1);
        }
    }, [subscription]);

    return(
        <div className="flex bg-slate-800 border-1 border-gray-700 rounded-lg
        w-3/4">
            <div className="w-1/2 select-none pointer-events-none">
                <img className="rounded-lg" src="\src\assets\subscription_image\netflix.png"></img>
            </div>
            <form className="p-3 text-white">
                <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                    <div className="flex flex-col">
                        <label htmlFor="subscription-name">Subscription Name:</label>
                        <Input
                        type="text"
                        name="subscription-name"
                        custom={!isCustom}
                        value={name}
                        onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="users-number">Users:</label>
                        <Input
                        type="text"
                        name="users-number"
                        custom={true}
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="subscription-value">Price:</label>
                        <Input
                        type="text"
                        name="subscription-value"
                        custom={true}
                        value={price}
                        onChange={verifyPrice}/>
                        {error && (
                            <p className="text-red-600">{error}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="start-date">Start Date:</label>
                        <Input
                        type="date"
                        name="start-date"
                        custom={true}
                        value={price}
                        onChange={(event) => {event.target.value}}/>
                    </div>
                    <div>
                        <label htmlFor="due-date">Due Date:</label>
                        <Input
                        type="date"
                        name="due-date"
                        custom={true}
                        value={price}
                        onChange={(event) => {event.target.value}}/>
                    </div>
                    <div>
                        <label htmlFor="payment-method">Payment Method:</label>
                        <Input
                        type="select"
                        name="payment-method"
                        custom={true}
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        >
                            <option>Credit Card</option>
                            <option>Debit Card</option>
                            <option>PayPal</option>
                            <option>Apple Pay</option>
                            <option>Google Pay</option>
                        </Input>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SubscriptionForm;
import { use, useEffect, useState } from "react";
import Input from "./Input";

function SubscriptionForm({subscription}){

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [priceError, setPriceError] = useState('');
    const [user, setUser] = useState('');
    const [userError, setUserError] = useState('');
    const [startDate, setstartDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const [isCustom, setIsCustom] = useState(1);

    function verifyPrice(price){
        const value = price.target.value;

        setPrice(value)

        if(isNaN(value) || value < 0){
            setPriceError('Please, write a valid number.');
        } else {
            setPriceError('');
        }
    }

    function verifyUsers(user){
        const value = user.target.value;

        setUser(value)

        if(isNaN(value) || value < 0){
            setUserError('Please, write a valid number.');
        } else {
            setUserError('');
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
                        value={user}
                        onChange={verifyUsers}/>
                        {userError && (
                            <p className="text-red-600">{userError}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="subscription-value">Price:</label>
                        <Input
                        type="text"
                        name="subscription-value"
                        custom={true}
                        value={price}
                        onChange={verifyPrice}/>
                        {priceError && (
                            <p className="text-red-600">{priceError}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="start-date">Start Date:</label>
                        <Input
                        type="date"
                        name="start-date"
                        custom={true}
                        value={startDate}
                        onChange={(event) => setstartDate(event.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="payment-method">Payment Method:</label>
                        <Input
                        type="select"
                        name="payment-method"
                        custom={true}
                        value={paymentMethod}
                        onChange={(event) => setPaymentMethod(event.target.value)}
                        >
                            <option>Credit Card</option>
                            <option>Debit Card</option>
                            <option>PayPal</option>
                            <option>Apple Pay</option>
                            <option>Google Pay</option>
                        </Input>
                    </div>
                    <div>
                        <label htmlFor="due-date">Due Date:</label>
                        <Input
                        type="date"
                        name="due-date"
                        custom={true}
                        value={dueDate}
                        onChange={(event) => setDueDate(event.target.value)}/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SubscriptionForm;
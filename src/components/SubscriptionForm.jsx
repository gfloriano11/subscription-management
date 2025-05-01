import { useEffect, useRef, useState } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

function SubscriptionForm({subscription}){

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [priceError, setPriceError] = useState('');
    const [user, setUser] = useState('');
    const [userError, setUserError] = useState('');
    const [startDate, setstartDate] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [categoryId, setCategoryId] = useState(0);

    const [isCustom, setIsCustom] = useState(1);

    const [image, setImage] = useState('');

    const formRef = useRef({});

    function verifyPrice(price){
        const value = price.target.value;

        setPrice(value)

        if(value === ''){
            setPriceError('');
        }

        if(isNaN(value) || value < 0){
            setPriceError('Please, write a valid number.');
        } else {
            setPriceError('');
        }
    }

    function verifyUsers(user){
        const value = user.target.value;

        setUser(value)

        if(value === ''){
            setUserError('');
        }

        if (isNaN(value) || value < 0 || Number.isInteger(Number(value)) === false) {
            setUserError('Please, write a valid integer.');
        } else {
            setUserError('');
        }
    }

    function submitForm(submit){

        submit.preventDefault();

        console.log(formRef);

        const subscriptionData = {
            name,
            price, 
            user,
            dueDate,
            startDate,
            paymentMethod,
            categoryId
        }
    }

    useEffect(() => {
        if (subscription) {
            setName(subscription.subscription_name || '');
            setIsCustom(subscription.is_custom ?? 1);
            setImage(subscription.image);
            setCategoryId(subscription.category_id);
        }
    }, [subscription]);

    return(
        <div className="flex justify-center">
            <div className="flex w-3/4 justify-center bg-slate-800 border-1 border-gray-700 rounded-lg">
                {image && (
                <div className="flex-1 select-none pointer-events-none bg-white rounded-lg">
                    <img className="rounded-lg w-full" src={image}></img>
                </div>
                )}
                <form onSubmit={submitForm} 
                className="flex-1 p-3 text-white flex flex-col gap-3 justify-around">
                    <div className="grid grid-cols-2 gap-x-5 gap-y-3">
                        <div className="flex flex-col">
                            <label htmlFor="subscription-name">Subscription Name:</label>
                            <Input
                            type="text"
                            name="subscription-name"
                            custom={isCustom}
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            ref={(element) => formRef.current.name = element}
                            />
                        </div>
                        <div>
                            <label htmlFor="users-number">Users:</label>
                            <Input
                            type="text"
                            name="users-number"
                            custom={1}
                            value={user}
                            onChange={verifyUsers}
                            ref={(element) => formRef.current.users = element}/>
                            {userError && (
                                <p className="text-red-600">{userError}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="subscription-value">Price:</label>
                            <Input
                            type="text"
                            name="subscription-value"
                            custom={1}
                            value={price}
                            onChange={verifyPrice}
                            ref={(element) => formRef.current.price = element}/>
                            {priceError && (
                                <p className="text-red-600">{priceError}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="start-date">Start Date:</label>
                            <Input
                            type="date"
                            name="start-date"
                            custom={1}
                            value={startDate}
                            onChange={(event) => setstartDate(event.target.value)}
                            ref={(element) => formRef.current.startDate = element}/>
                        </div>
                        <div>
                            <label htmlFor="payment-method">Payment Method:</label>
                            <Input
                            type="select"
                            name="payment-method"
                            custom={1}
                            value={paymentMethod}
                            ref={(element) => formRef.current.paymentMethod = element}
                            onChange={(event) => setPaymentMethod(event.target.value)}>
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
                            custom={1}
                            value={dueDate}
                            onChange={(event) => setDueDate(event.target.value)}
                            ref={(element) => formRef.current.dueDate = element}/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <SubmitButton/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SubscriptionForm;
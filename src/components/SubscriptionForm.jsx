import { useEffect, useState } from "react";
import Input from "./Input";
import PopUp from './PopUp';
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";

function SubscriptionForm({subscription}){

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [priceError, setPriceError] = useState('');
    const [user, setUser] = useState('');
    const [userError, setUserError] = useState('');
    const [startDate, setstartDate] = useState('');
    const [plan, setPlan] = useState(null);
    const [startDateError, setstartDateError] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [currency, setCurrency] = useState('')
    const [categoryId, setCategoryId] = useState(0);

    const [isCustom, setIsCustom] = useState(1);

    const [image, setImage] = useState('');

    const [submit, setSubmit] = useState('');

    if(currency === '' || !currency){
        setCurrency('1');
    }

    if(paymentMethod === '' || !paymentMethod){
        setPaymentMethod('Credit Card');
    }

    if(plan === '' || !plan){
        setPlan('1');
    }

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

    function verifyStartDate(date){

        if(date === ''){
            setstartDateError('');
        }

        if(!date){
            setstartDateError('Insert a valid date');
        } else {
            setstartDateError('')
        }

        setstartDate(date)
    }

    function closePopUp(){

        setSubmit('');
    }

    async function submitForm(submit){

        submit.preventDefault();

        if(!price || !currency || !paymentMethod || !user || !startDate || !plan){

            setSubmit('Complete all fields to create your subscription.')
        } else {
            const response = await fetch(`http://localhost:8000/subscription/add`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    price: price, 
                    user: user,
                    startDate: startDate,
                    plan: plan,
                    paymentMethod: paymentMethod,
                    currency: currency,
                    categoryId: categoryId,
                    isCustom: isCustom
                })
            });
    
            
            if(!response.ok){
                throw new Error('Error to add new subscription');
            }
    
    
            navigate('/home');
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
            <div className="flex flex-col md:flex-row w-3/4 justify-center bg-slate-800 border-1 border-gray-700 rounded-lg">
                {image && (
                <div className="md:w-1/2 h-fit max-w-lg md:max-w-full select-none pointer-events-none bg-white rounded-lg">
                    <img className="rounded-lg w-full" src={image}></img>
                </div>
                )}
                <form onSubmit={submitForm} 
                className="flex-1 p-3 text-white md:2/3 flex flex-col items-center gap-3 justify-around">
                    <div className="flex flex-col items-center md:w-full md:grid grid-cols-2 gap-x-5 gap-y-3">
                        <div className="flex flex-col w-full">
                            <label htmlFor="subscription-name">Subscription Name:</label>
                            <Input
                            type="text"
                            name="subscription-name"
                            custom={isCustom}
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="users-number">Users:</label>
                            <Input
                            type="text"
                            name="users-number"
                            custom={1}
                            value={user}
                            onChange={verifyUsers}/>
                            {userError && (
                                <p className="text-red-600">{userError}</p>
                            )}
                        </div>
                        <div className="w-full">
                            <label htmlFor="subscription-value">Price:</label>
                            <div className="flex gap-1">
                                <div className="w-2/5 md:w-5/5 lg:w-3/5">
                                    <Input
                                    type='select'
                                    name="currency"
                                    custom={1}
                                    onChange={(event) => setCurrency(event.target.value)}>
                                        <option value="1">R$</option>
                                        <option value="2">$</option>
                                    </Input>
                                </div>
                            <Input
                            type="text"
                            name="subscription-value"
                            custom={1}
                            value={price}
                            onChange={verifyPrice}/>
                            </div>
                            {priceError && (
                                <p className="text-red-600">{priceError}</p>
                            )}
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="start-date">Start Date:</label>
                            <Input
                            type="date"
                            name="start-date"
                            custom={1}
                            value={startDate}
                            onChange={(event) => verifyStartDate(event.target.value)}/>
                            {startDateError && (
                                <p className="text-red-600">{startDateError}</p>
                            )}
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="payment-method">Payment Method:</label>
                            <div className="flex gap-1">
                                <Input
                                type="select"
                                name="payment-method"
                                custom={1}
                                onChange={(event) => setPaymentMethod(event.target.value)}>
                                    <option value="Credit Card">Credit Card</option>
                                    <option value="Debit Card">Debit Card</option>
                                    <option value="Paypal">PayPal</option>
                                    <option value="Apple Pay">Apple Pay</option>
                                    <option value="Google Pay">Google Pay</option>
                                </Input>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="plan">Plan:</label>
                            <Input
                            type="select"
                            name="plan"
                            custom={1}
                            onChange={(event) => setPlan(event.target.value)}>
                                <option value="1">1 month</option>
                                <option value="3">3 months</option>
                                <option value="6">6 months</option>
                                <option value="12">1 year</option>
                            </Input>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <SubmitButton/>
                    </div>
                </form>
            </div>
            {submit !== '' && (
                <PopUp
                text="Ouch! Something went wrong :("
                error={submit}
                onClick={() => closePopUp()}/>
            )}
        </div>
    );
}

export default SubscriptionForm;
import { useEffect, useState } from "react";
import ActionButton from "../components/ActionButton";
import Input from "../components/Input";
import { Save, X } from "lucide-react";

function SubscriptionEditForm({subscription, setEdit, editData, notes, setNotes}){
    
    const [isCustom, setIsCustom] = useState(1);

    const [status, setStatus] = useState('')
    const [plan, setPlan] = useState('');
    const [startDate, setStartDate] = useState('');
    const [users, setUsers] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [currency, setCurrency] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        setStatus(subscription.is_active);
        setPlan(subscription.plan)
        setPaymentMethod(subscription.payment_method);
        setPrice(subscription.price)

        if(subscription.start_date){
            const [days, month, year] = subscription.start_date.split('/');

            const inputDate = `${year}-${month}-${days}`

            setStartDate(inputDate);
        }

        setNotes(subscription.notes || '')

        setCurrency(subscription.symbol);
        setUsers(subscription.users);
        setCategory(subscription.category_name);

        
        if(category !== 'Custom'){
            setIsCustom(0);
        }
        
    }, [])

    return(
        <div className="flex flex-col items-center gap-3">
            <form className="grid grid-cols-2 text-center md:text-start gap-x-3 gap-y-3 max-w-92">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <p>📊 Status:</p>
                        <Input
                        type="select"
                        value={status}
                        custom={1}
                        onChange={(event) => setStatus(event.target.value)}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </Input>
                    </div>
                    <div className="flex flex-col">
                        <p>⏰ Plan:</p>
                        <Input type="select"
                        value={plan}
                        custom={1}
                        onChange={(event) => setPlan(event.target.value)}>
                            <option value="1">1 Month</option>
                            <option value="3">3 Months</option>
                            <option value="6">6 Months</option>
                            <option value="12">1 Year</option>
                        </Input>
                    </div>
                </div>
                <div className="flex flex-col h-full gap-3">
                    <div className="flex flex-col">
                        <p>💵 Price:</p>
                        <div className="flex gap-1 w-full">
                            <div className="flex w-5/5 md:w-5/5 lg:w-4/5">
                                <Input type="select" 
                                value={currency}
                                custom={1}
                                onChange={(event) => setCurrency(event.target.value)}>
                                    <option>R$</option>
                                    <option>$</option>
                                </Input>
                            </div>
                            <Input type="text" 
                            value={price}
                            custom={1}
                            onChange={(event) => setPrice(event.target.value)}/>
                        </div>
                    </div>
                    <div className="flex flex-col h-full">
                        <p>💳 Method:</p>
                        <div className="flex h-full">
                            <Input type="select" 
                            value={paymentMethod}
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
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <p>📅 Start:</p>
                        <Input
                        type="date"
                        value={startDate}
                        onChange={(event) => setStartDate(event.target.value)}
                        custom={1}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>📅 End:</p>
                        <p>{subscription.due_date}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <p>🙍 Users:</p>
                        <Input type="text"
                        value={users}
                        onChange={(event) => setUsers(event.target.value)}
                        custom={1}/>
                    </div>
                    <div className="flex flex-col">
                        <p>📁 Category:</p>
                        <Input type="select"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        custom={isCustom}>
                            <option>Streaming</option>
                            <option>Games</option>
                            <option>Education</option>
                            <option>Music</option>
                            <option>Healthcare</option>
                        </Input>
                    </div>
                </div>
            </form>
            <div className="flex w-full justify-center p-3 bg-gray-800 rounded-md text-gray-300 italic max-w-2xs max-h-32">
                {<Input type="textarea" 
                value={notes || ''}
                onChange={(event) => setNotes(event.target.value)}
                custom={1}/>
                }
            </div>
            <div className="pr-2 flex justify-around w-full">
                <ActionButton text="Save" color="bg-green-600" Icon={Save} onClick={() => (saveData(), setEdit(false))}/>
                <ActionButton text="Cancel" color="bg-red-600" Icon={X} onClick={() => (setEdit(false))}/>
            </div>
        </div>
    );
}

export default SubscriptionEditForm;
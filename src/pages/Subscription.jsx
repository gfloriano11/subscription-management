import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ActionButton from "../components/ActionButton";
import { Pencil, Trash2 } from "lucide-react";
import GoBackButton from "../components/GoBackButton";
import Input from "../components/Input";

function Subscription(){

    const [edit, setEdit] = useState(false);

    const [subscription, setSubscription] = useState([]);

    const { pathname } = useLocation()

    const path = pathname.split('/');
    const id = path[3];

    async function getSubscription(id){


        const response = await fetch(`http://localhost:8000/my-subscriptions/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await response.json();

        let categoryNameClean = removeEmojis(data[0].category_name);
        data[0].category_name = categoryNameClean;

        setSubscription(data[0]);
    }

    function removeEmojis(str) {
        return str.replace(/[\p{Emoji_Presentation}\p{Emoji}\uFE0F]/gu, '').trim();
    }

    useEffect(() => {
        getSubscription(id);
    }, [])

    const teste = 'teste'

    return(
        <section className="flex flex-col gap-5 mt-5">
            <div className="bg-zinc-900 p-4 rounded-lg 
            shadow-[0px_10px_20px] shadow-purple-950 border-2 border-gray-800 
            text-white font-inter flex flex-col md:flex-row gap-3">
                <div className="relative md:h-64">
                    <img className="rounded-xl w-full max-h-64 md:max-w-md select-none pointer-events-none" src={subscription.image}></img>
                    <p className="absolute bottom-4 left-4 text-3xl font-bold tracking-wide">{subscription.subscription_name}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                    {edit 
                    ? 
                    <form className="grid grid-cols-2 text-center md:text-start gap-x-3 gap-y-3 max-w-2xs">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col">
                                <p>📊 Status:</p>
                                <Input value={subscription.is_active ? ('Active') : ('Inactive')}/>
                            </div>
                            <div className="flex flex-col">
                                <p>⏰ Plan:</p>
                                <Input value={subscription.plan}/>
                            </div>
                        </div>
                        <div className="flex flex-col h-full gap-3">
                            <div className="flex flex-col">
                                <p>💵 Price:</p>
                                <div className="flex gap-1 w-full">
                                    <div className="flex w-5/5 md:w-5/5 lg:w-4/5">
                                        <Input type="select" value={subscription.symbol}>
                                            <option>R$</option>
                                            <option>U$</option>
                                        </Input>
                                    </div>
                                    <Input value={subscription.price}/>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p>💳 Method:</p>
                                <div className="w-full">
                                    <Input type="select" value={subscription.payment_method}>
                                        <option>Credit Card</option>
                                        <option>Debit Card</option>
                                    </Input>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>📅 Start: {subscription.start_date}</p>
                            <p>📅 End: {subscription.due_date}</p>
                        </div>
                        <div>
                            <p>🙍 Users: {subscription.users} user(s)</p>
                            <p>📁 Category: {subscription.category_name}</p>
                        </div>
                    </form>
                    :                     
                    <div className="grid grid-cols-2 text-center md:text-start gap-x-3 gap-y-3">
                        <div>
                            <p>📊 Status: {subscription.is_active ? ('Active') : ('Inactive')}</p>
                            <p>⏰ Plan: {subscription.plan}</p>
                        </div>
                        <div>
                            <p>💵 Price: {subscription.symbol} {subscription.price}</p>
                            <p>💳 Method: {subscription.payment_method}</p>
                        </div>
                        <div>
                            <p>📅 Start: {subscription.start_date}</p>
                            <p>📅 End: {subscription.due_date}</p>
                        </div>
                        <div>
                            <p>🙍 Users: {subscription.users} user(s)</p>
                            <p>📁 Category: {subscription.category_name}</p>
                        </div>
                    </div>}
                    <div className="mt-4 p-3 bg-gray-800 rounded-md text-gray-300 italic max-w-md">
                        {teste || "Sem descrição."}
                    </div>
                    <div className="pr-2 flex justify-around w-full">
                        <ActionButton text="Edit" color="bg-green-600" Icon={Pencil} onClick={() => (setEdit(true))}/>
                        <ActionButton text="Delete" color="bg-red-600" Icon={Trash2}/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <GoBackButton/>
            </div>
        </section>
    );
}

export default Subscription;
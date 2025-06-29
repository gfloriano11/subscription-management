import { useNavigate } from "react-router-dom";
import ActionButton from "../components/ActionButton";
import PopUpDelete from "../components/PopUpDelete";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

function SubscriptionInfo({subscription, setEdit}){

    const [confirmDelete, setConfirmDelete] = useState('');

    const navigate = useNavigate();

    async function deleteSubscription(id){

        if(confirmDelete === false){
            return console.log('cancelou deleção');
        }

        const response = await fetch(`http://localhost:8000/my-subscriptions/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!response.ok){
            throw new Error('error to delete subscription', response);
        }

        navigate('/home');
    }

    return(
        <div className="flex flex-col items-center gap-4">
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
            </div>
            <div className="flex justify-center p-3 bg-gray-800 rounded-md text-gray-300 italic max-w-2xs max-h-20 overflow-y-scroll">
                <p>{subscription.notes || "No notes."}</p>
            </div>
            <div className="pr-2 flex justify-around w-full">
                <ActionButton text="Edit" color="bg-green-600" Icon={Pencil} onClick={() => (setEdit(true))}/>
                <ActionButton text="Delete" color="bg-red-600" Icon={Trash2} onClick={() => (setConfirmDelete(true))}/>
            </div>
            {confirmDelete !== '' &&(
                <PopUpDelete
                id={subscription.id}
                text="Do you really want to delete this subscription?"
                onClick={() => (setConfirmDelete(''))}/>
            )}
        </div>
    );
}

export default SubscriptionInfo;
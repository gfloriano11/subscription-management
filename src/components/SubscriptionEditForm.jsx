import ActionButton from "../components/ActionButton";
import Input from "../components/Input";
import { Pencil, Trash2 } from "lucide-react";

function SubscriptionEditForm({subscription, setEdit, saveData}){
    return(
        <div className="flex flex-col gap-3">
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
                    <div className="flex flex-col h-full">
                        <p>💳 Method:</p>
                        <div className="flex h-full">
                            <Input type="select" value={subscription.payment_method}>
                                <option>Credit Card</option>
                                <option>Debit Card</option>
                            </Input>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <p>📅 Start:</p>
                        <Input type="date" value='2006-03-12'/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>📅 End:</p>
                        <p>{subscription.due_date}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col">
                        <p>🙍 Users:</p>
                        <Input type="text" value={subscription.users}/>
                    </div>
                    <div className="flex flex-col">
                        <p>📁 Category:</p>
                        <Input type="select" value={subscription.category_name}>
                            <option>Streaming</option>
                        </Input>
                    </div>
                </div>
            </form>
            <div className="flex justify-center p-3 bg-gray-800 rounded-md text-gray-300 italic max-w-2xs max-h-32">
                {<Input type="textarea" value={subscription.notes}/> || "Sem descrição."}
            </div>
            <div className="pr-2 flex justify-around w-full">
                <ActionButton text="Save" color="bg-green-600" Icon={Pencil} onClick={() => (saveData(), setEdit(false))}/>
                <ActionButton text="Cancel" color="bg-red-600" Icon={Trash2} onClick={() => (setEdit(false))}/>
            </div>
        </div>
    );
}

export default SubscriptionEditForm;
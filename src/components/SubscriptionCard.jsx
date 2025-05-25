import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function SubscriptionCard({id, subscriptionName, subscriptionPrice, currency, path, logo}){
    
    return(
        <div
        id={id}
        className="flex items-center w-2xs bg-zinc-900 p-4 rounded-lg 
        shadow-[0px_10px_20px] shadow-purple-950 border-2 border-gray-800 
        gap-2.5 text-white font-inter font-light">
            <div className="flex gap-5">
                <div className="flex justify-left items-center select-none p-2 pointer-events-none w-fit border-2 rounded-lg border-gray-500">
                    <img className="w-10 rounded-lg" src={logo}></img>
                </div>
            </div>
            <div className="flex justify-between w-5/7">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <p className="text-white text-2xl">{subscriptionName}</p>
                    </div>
                    <div className="flex gap-1 justify-baseline">
                        <p>{currency}</p>
                        <p>{subscriptionPrice}</p>
                    </div>
                </div>
                <Link to={`subscription/${id}`}
                className="flex items-center">
                    <ArrowUpRight size={32} className="cursor-pointer "/>
                </Link>
            </div>
        </div>
    );
}

export default SubscriptionCard;
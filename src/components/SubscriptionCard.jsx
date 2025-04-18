import { ArrowUpRight } from "lucide-react";

function SubscriptionCard(){
    return(
        <div className="flex items-center w-2xs bg-zinc-900 p-4 rounded-lg 
        shadow-[0px_10px_20px] shadow-purple-950 border-2 border-gray-800 
        gap-2.5 text-white font-inter font-light">
            <div className="flex gap-5">
                <div className="flex justify-left items-center p-2 select-none pointer-events-none w-fit border-2 rounded-lg border-gray-500">
                    <img className="w-10" src="/src/assets/logos/netflix-logo.svg"></img>
                </div>
            </div>
            <div className="flex justify-between w-5/7">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <p className="text-white text-2xl">Netflix</p>
                    </div>
                    <div className="flex justify-baseline">
                        <p>R$99.90</p>
                    </div>
                </div>
                <a className="flex items-center">
                    <ArrowUpRight size={32} className="cursor-pointer "/>
                </a>
            </div>
        </div>
    );
}

export default SubscriptionCard;
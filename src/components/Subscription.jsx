function SubscriptionCard(){
    return(
        <div className="flex items-center w-2xs bg-zinc-900 p-4 rounded-lg shadow-[0px_10px_20px] shadow-purple-950">
            <div className="flex gap-5">
                <div className="flex justify-left items-center p-2 select-none pointer-events-none w-fit border-2 rounded-lg border-gray-300">
                    <img className="w-10" src="src\assets\netflix-logo.svg"></img>
                </div>
                <div className="flex items-center">
                    <p className="text-white text-2xl">Netflix</p>
                </div>
            </div>
        </div>
    );
}

export default SubscriptionCard;
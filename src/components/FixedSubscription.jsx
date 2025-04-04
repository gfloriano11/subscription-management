function FixedSubscription(){
    return(
        <div onClick={() => {alert('Selecionado: nome do serviço')}} 
        className="flex items-center w-2xs bg-zinc-900 p-4 rounded-lg 
    shadow-[0px_10px_20px] shadow-purple-950 border-2 border-gray-800 
    gap-2.5 text-white font-inter font-light">
            <div className="flex gap-5">
                <div className="flex justify-left items-center p-2 select-none pointer-events-none w-fit border-2 rounded-lg border-gray-500">
                    <img className="w-10" src="/src/assets/netflix-logo.svg"></img>
                </div>
            </div>
            <div className="flex justify-between w-5/7">
                <div className="flex flex-col">
                    <div className="flex items-center">
                        <p className="text-white text-2xl">nome do serviço</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FixedSubscription;
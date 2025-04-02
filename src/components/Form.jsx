function Form(){

    return(
        <form className="p-4 rounded-lg h-fit flex justify-center bg-slate-900 border-2 border-gray-500">
             <div className="flex flex-col">
                   <label className="text-white" htmlFor="subscription_name">Nome:</label>
                <input className="bg-slate-600 rounded-lg h-6 select-none" type="text"></input>
            </div>
        </form>
    )
}

export default Form;
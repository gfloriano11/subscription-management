function Form({form}){
    if(form){
        return(
            <form className="top-1/2 bottom-1/2 p-4 rounded-lg fixed h-fit flex justify-center bg-slate-900 border-2 border-gray-500">
                <div className="flex flex-col">
                    <label className="text-white" htmlFor="subscription_name">Nome:</label>
                    <input className="bg-slate-600 rounded-lg h-6 select-none" type="text"></input>
                </div>
            </form>
        )
    }

    return(
        <>
        </>
    )
}

export default Form;
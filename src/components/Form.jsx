function Form({form}){
    if(form){
        return(
            <form className="top-1/2 p-4 rounded-lg fixed flex justify-center bg-white border-2 border-gray-400">
                <div className="flex flex-col">
                    <label htmlFor="subscription_name">Nome</label>

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
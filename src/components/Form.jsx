function Form({form}){
    if(form){
        return(
            <div className="bg-slate-300">
                <p>aberto</p>
            </div>
        )
    }

    return(
        <div className="bg-slate-300">
            <p>fechado</p>
        </div>
    )
}

export default Form;
import Input from "./Input";
import PageButton from "./PageButton";

function RenderFormContent({values, sets, registerUser}){
    if(values.stage === 1){
        return(
            <div className="w-full flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <Input
                        placeholder="Your best e-mail :)"
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={(event) => sets.setEmail(event.target.value)}
                    />
                    <Input 
                        placeholder="Add your password"
                        type="password"
                        name="password"
                        onChange={(event) => sets.setPassword(event.target.value)}
                        showPass={values.showPass}
                        setShowPass={sets.setShowPass}
                    />
                </div>
                <div className="flex gap-2">
                    <PageButton onClick={() => sets.setStage(1)}/>
                    <PageButton nextPage onClick={() => sets.setStage(2)}/>
                </div>
            </div>
        )
    }

    if(values.stage === 2){
        return(
            <div className="w-full flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <Input
                        type="text"
                        placeholder="Your name"
                        name='name'
                        value={values.name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Add your salary"
                        value={values.salary}
                        onChange={(event) => setSalary(event.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <PageButton onClick={() => sets.setStage(1)}/>
                    <PageButton nextPage onClick={() => sets.setStage(3)}/>
                </div>
            </div>
        )
    }

    if(values.stage === 3){
        return(
            <div className="w-full flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <Input
                        type='text'
                        placeholder='Add your age'
                        value={values.age}
                        onChange={(event) => sets.setAge(event.target.value)}
                    />
                    <Input type="select">
                        <option value='null'>Select your gender</option>
                        <option value='male'>Female</option>
                        <option value='female'>Male</option>
                    </Input>
                </div>
                <div className="flex gap-2">
                    <PageButton onClick={() => sets.setStage(2)}/>
                    <PageButton register onClick={() => registerUser()}/>
                </div>
            </div>
        )
    }
}

export default RenderFormContent;
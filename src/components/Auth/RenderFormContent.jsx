import Input from "./Input";
import PageButton from "./PageButton";

function RenderFormContent({stage, setStage, setName, setAge, setEmail, setPassword, setSalary, showPass, setShowPass, registerUser}){
    if(stage === 1){
        return(
            <div className="w-full flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <Input placeholder="Your best e-mail :)" type="text" onChange={(event) => setEmail(event.target.value)}/>
                    <Input placeholder="Add your password" type="password" onChange={(event) => setPassword(event.target.value)} showPass={showPass} setShowPass={setShowPass}/>
                </div>
                <div className="flex gap-2">
                    <PageButton onClick={() => setStage(1)}/>
                    <PageButton nextPage onClick={() => setStage(2)}/>
                </div>
            </div>
        )
    }

    if(stage === 2){
        return(
            <div className="w-full flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <Input type="text" placeholder="Your name" onChange={(event) => setName(event.target.value)}/>
                    <Input type="text" placeholder="Add your salary" onChange={(event) => setSalary(event.target.value)}/>
                </div>
                <div className="flex gap-2">
                    <PageButton onClick={() => setStage(1)}/>
                    <PageButton nextPage onClick={() => setStage(3)}/>
                </div>
            </div>
        )
    }

    if(stage === 3){
        return(
            <div className="w-full flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <Input type='text' placeholder='Add your age' onChange={(event) => setAge(event.target.value)}/>
                    <Input type="select">
                        <option value='null'>Select your gender</option>
                        <option value='male'>Female</option>
                        <option value='female'>Male</option>
                    </Input>
                </div>
                <div className="flex gap-2">
                    <PageButton onClick={() => setStage(1)}/>
                    <PageButton register onClick={() => registerUser()}/>
                </div>
            </div>
        )
    }
}

export default RenderFormContent;
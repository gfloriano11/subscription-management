import Input from "./Input";
import PageButton from "./PageButton";

function RenderFormContent({stage, setStage, setEmail, setPassword, setSalary, showPass, setShowPass}){
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
                    <Input type="select">
                        <option>Select your gender</option>
                        <option>Female</option>
                        <option>Male</option>
                    </Input>
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
                    <Input type="select">
                        <option>Select your gender</option>
                        <option>Female</option>
                        <option>Male</option>
                    </Input>
                    <Input type="text" placeholder="Add your salary" onChange={(event) => setSalary(event.target.value)}/>
                </div>
                <div className="flex gap-2">
                    <PageButton onClick={() => setStage(1)}/>
                    <PageButton nextPage onClick={() => setStage(3)}/>
                </div>
            </div>
        )
    }
}

export default RenderFormContent;
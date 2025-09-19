import { useEffect } from "react";
import Input from "./Input";
import PageButton from "./PageButton";

function RenderFormContent({values, sets, registerUser}){

    function validateErrors(){

        if(values.stage === 1){
            console.log('etapa 1');
        }
        
        if(values.stage === 1){
            console.log('etapa 1');
        }

        if(values.stage === 1){
            console.log('etapa 1');
        }
        if(!errors.email.trim()) errors.email = "Invalid name";
        if(!errors.pass.trim()) errors.pass = "Invalid password";
        if(!errors.name.trim()) errors.name = "Invalid name";
        if(!errors.salary.trim()) errors.salary = "Invalid salary";
        if(!errors.age.trim()) errors.age = "Invalid age";
        if(!errors.gender.trim()) errors.gender = "Invalid gender";

        console.log(errors.email);

    }
    const errors = {
        email: "",
        pass: "",
        name: "",
        salary: "",
        age: "",
        gender: "",
    }
    
    useEffect(() => {
        validateErrors();
    }, [values.stage])

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
                    {errors.email === "" && (<p>erro</p>)}
                    <Input 
                        placeholder="Add your password"
                        type="password"
                        name="password"
                        onChange={(event) => sets.setPassword(event.target.value)}
                        showPass={values.showPass}
                        value={values.password}
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
                        onChange={(event) => sets.setName(event.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Add your salary"
                        value={values.salary}
                        onChange={(event) => sets.setSalary(event.target.value)}
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
                    <Input 
                        type="select"
                        name='gender'
                        value={values.gender}
                        onChange={(event) => sets.setGender(event.target.value)}
                    >
                        <option value=''>Select your gender</option>
                        <option value='female'>Female</option>
                        <option value='male'>Male</option>
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
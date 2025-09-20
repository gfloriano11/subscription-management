import { useEffect, useState } from "react";
import Input from "./Input";
import PageButton from "./PageButton";
import ErrorMessage from "../ErrorMessage";

function RenderFormContent({values, sets, registerUser}){

    const [errors, setErrors] = useState({
        email: "",
        pass: "",
        name: "",
        salary: "",
        age: "",
        gender: "",
    })

    function validateErrors(){
        
        const newErrors = {
            email: "",
            pass: "",
            name: "",
            salary: "",
            age: "",
            gender: ""
        }

        if(!values.email.trim()) newErrors.email = "Invalid name";
        if(!values.password.trim()) newErrors.pass = "Invalid password";
        if(!values.name.trim()) newErrors.name = "Invalid name";
        if(!values.salary.trim()) newErrors.salary = "Invalid salary";
        if(!values.age.trim()) newErrors.age = "Invalid age";
        if(!values.gender.trim()) newErrors.gender = "Invalid gender";

        setErrors(newErrors);
    }

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
                    {errors.email !== "" && (<ErrorMessage message={errors.email}/>)}
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
                    {/* <PageButton nextPage onClick={() => sets.setStage(2)}/> */}
                    <PageButton nextPage onClick={() => validateErrors()}/>
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
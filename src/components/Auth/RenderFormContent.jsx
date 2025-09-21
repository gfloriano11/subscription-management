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

        // setErrors(newErrors);

        if(values.stage === 1){
            // if(values.email !== "" && values.password !== ""){
            //     sets.setStage(2);
            // }

            if(!values.email.trim() || !values.email.includes("@")) newErrors.email = "Invalid email";
            if(values.password.length < 6) newErrors.pass = "Password need to have more than 5 characters"
            setErrors(newErrors);

            if(values.email !== "" && values.password.length > 5){
                sets.setStage(2);
            }
        }
        
        if(values.stage === 2){
            if(values.name !== "" && values.salary !== ""){
                sets.setStage(3);
            }

            if(!values.name.trim()) newErrors.name = "Invalid name";
            if(!values.salary.trim()) newErrors.salary = "Invalid salary";
        }

        if(values.stage === 3){
            if(values.age !== "" && values.gender !== ""){
                sets.setStage(3);
            }

            if(!values.age.trim()) newErrors.age = "Invalid age";
            if(!values.gender.trim()) newErrors.gender = "Invalid gender";

            registerUser();
        }
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
                    {errors.pass !== "" && (<ErrorMessage message={errors.pass}/>)}
                </div>
                <div className="flex gap-2">
                    <PageButton onClick={() => sets.setStage(1)}/>
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
                    {errors.name !== "" && (<ErrorMessage message={errors.name}/>)}
                    <Input
                        type="text"
                        placeholder="Add your salary"
                        value={values.salary}
                        onChange={(event) => sets.setSalary(event.target.value)}
                    />
                    {errors.salary !== "" && (<ErrorMessage message={errors.salary}/>)}
                </div>
                <div className="flex gap-2">
                    <PageButton onClick={() => sets.setStage(1)}/>
                    <PageButton nextPage onClick={() => validateErrors()}/>
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
                    {errors.age !== "" && (<ErrorMessage message={errors.age}/>)}
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
                    {errors.gender !== "" && (<ErrorMessage message={errors.gender}/>)}
                </div>
                <div className="flex gap-2">
                    <PageButton onClick={() => sets.setStage(2)}/>
                    <PageButton register onClick={() => validateErrors()}/>
                </div>
            </div>
        )
    }
}

export default RenderFormContent;
import { useState } from "react";
import Input from "../../components/Auth/Input";
import NextPageButton from "../../components/Auth/NextPageButton";
import { Link } from "react-router-dom";

function RenderFormContent({stage, setStage, setEmail, setPassword, showPass, setShowPass}){
    if(stage === 1){
        return(
            <div className="w-full flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <Input placeholder="Your best e-mail :)" type="text" onChange={(event) => setEmail(event.target.value)}/>
                    <Input placeholder="Add your password" type="password" onChange={(event) => setPassword(event.target.value)} showPass={showPass} setShowPass={setShowPass}/>
                </div>
                <div className="flex flex-col gap-2">
                    <NextPageButton onClick={() => setStage(2)}/>
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
                    <Input type="text" placeholder="Add your salary"/>
                </div>
                <div className="flex flex-col gap-2">
                    <NextPageButton onClick={() => setStage(3)}/>
                </div>
            </div>
        )
    }
}

export default RenderFormContent;
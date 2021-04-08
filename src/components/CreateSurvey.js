import { useState } from "react"
import Options from "./Options"
import Question from "./Questions"
import TypeSelector from "./TypeSelector"

const CreateSurvey = ({squestions}) =>{
    const getRandom= () =>{
        return Math.floor((Math.random()*1000) + 1);
    }

    const [qtext, setQtext] = useState("");
    const [qType, setQtype] = useState(0);
    const [options, setOptions] = useState([{uid:getRandom(), value:''},{uid:getRandom(), value:''}])
    const addOptions=() =>{

        let newOption = {
            uid: getRandom(),
            value: ''
        }

        let updatedOptions = [...options];
        updatedOptions.push(newOption);
        setOptions(updatedOptions);
    }

    const deleteOptions = () =>{
        if(options.length ===2){
            alert("Error: A select type question must have atleast two options");
        }
        else{
            let newOptions = [...options];
            newOptions.pop();
            setOptions(newOptions);
        }
        
    }

    return (
        <>

        <TypeSelector qType = {qType} setQtype = {setQtype}/>
        {qType !== 0?
            <>
            <Question/>
            {options.map((opt,key)=>(
                <Options 
                key = {key}
                addOptions = {addOptions}
                deleteOptions = {deleteOptions}
                />
            ))}
            </>
            :null}
        
        </>
    )
}

export default CreateSurvey;
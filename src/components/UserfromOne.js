import React,{useState} from "react"
import useInput from './useInput'

function UserfromOne(){
    const[firstName,bindFirstName,resetFirstName]=useInput('')
    const[lastName,bindLastName,resetLastName]=useInput('')

    const submitHandler=e=>{
        e.preventDefault()
        alert(`Hello${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return(
        <div>
            <form onSubmit={submitHandler}>
            <div>
                <label>firstName</label>
            <input {...bindFirstName} type="text" />
            </div>
            <div>
                <label>lastName</label>
            <input {...bindLastName} type="text" />
            </div>
            </form>
        </div>
    )

}
export default UserfromOne
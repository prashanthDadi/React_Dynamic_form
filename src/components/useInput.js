import {useState} from 'react'

function useInput(initalvalue){
    const[value,setValue]=useState(initalvalue)
    const reset=()=>{
        setValue(initalvalue)
    }
    const bind={
        value,
        onChange:e=>
        {setValue(e.target.value)}
    }
    return[value,bind,reset]
}
export default useInput
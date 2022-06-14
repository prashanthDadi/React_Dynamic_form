import React ,{useState} from  'react'

function HooksCount(){
    const initialState=0
    const[count,setCount]=useState(initialState)
 
    const incermentFive=()=>{
        for(let i=0; i<5;i++){
        setCount(prevState=>prevState+1)
    }
    }

    return(
        <div>
            count:{count}
            <button onClick={()=>setCount(initialState )}>Reset</button>
            <button onClick={()=>setCount(prevState=>prevState+1)}>increment</button>
            <button onClick={()=>setCount(prevState=>prevState-1)}>decrement</button>
            <button onClick={incermentFive}>Increment5</button>
        </div>
    )
}
export default HooksCount
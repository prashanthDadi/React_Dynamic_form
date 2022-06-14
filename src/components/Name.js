import React,{useState} from 'react'

function Name(){

    // const getValue=(event)=>{
    //        const  userName =event.target.value;
    //        console.log(userName)
    // }
    // return(<div>
    //         <input type="text"/>
    //         <button  onClick={getValue}>click </button>
    //         <h1>shiva</h1>
    //         </div>
    // )

    const[input,setInput]=useState("")
     return(
         <div>
             <input type='text' onInput={e=>setInput(e.target.value)}/>
             <h1>{input}</h1>
         </div>
     )


}
export default Name
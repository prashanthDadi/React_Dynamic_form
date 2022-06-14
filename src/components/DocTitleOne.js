import React,{useState} from 'react'
import UseDocTitle from './UseDoctitle'

function DocTitleOne(){
    const[Count,setCount]=useState(0)
UseDocTitle(Count)
    return(
        <div>
            <button onClick={()=>setCount(Count+1)}>count-{Count}</button>
        </div>
    )
}
export default DocTitleOne
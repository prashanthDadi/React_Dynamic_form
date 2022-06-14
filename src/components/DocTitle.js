 import React,{useState,useEffect} from 'react'
 
 function DocTitle() {
     const[count,usecount]=useState(0)
     useEffect(()=>{
         document.title=`document title${count}`

     },[count])
   return (
     <div>
         <button onClick={()=>usecount(count+1)}>count-{count}</button>
     </div>
   )
 }
 
 export default DocTitle
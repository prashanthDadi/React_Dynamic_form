
import{useEffect,useRef,useState}from 'react'

const login=()=> {
   
    const userRef=useRef();
    const errRef=useRef();

    const[user,setUser]=useState("");
    const[pwd,setPwd]=useState("");
    const[errMsg,setErrPwd]=useState("");
    const[success,setSuccess]=useState("");


    useEffect(()=>{
        useRef.current.focus()
    },[]);


    useEffect(()=>{
        setErrPwd("")
    },[user,pwd])


  return (
    <div>


    </div>
  )
}

export default login
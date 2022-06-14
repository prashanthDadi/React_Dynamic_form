import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom'


function ViewPage() {

const navigate=useNavigate()
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[phoneNum,setPhonenum]=useState("")

    const {view}=useParams()
console.log(view)

    useEffect(() => {
        axios.get(`http://192.168.4.109:8080/api/contacts/${view}`) 
            .then(res => {
                console.log(res.data)
                setName(res.data.name)
                setEmail(res.data.email)
                setPhonenum(res.data.phone)
    
            })
            .catch(err => {
                console.log(err)
            })
    },[])


    return(
        <div>
           <h3>{name}</h3>
           <h3>{email}</h3>
           <h3>{phoneNum}</h3>
           <button onClick={()=>{navigate("/")}}>Back</button>
        </div>
    )
}
export default ViewPage
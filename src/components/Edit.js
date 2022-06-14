import React from "react";
import { useState,useEffect } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bootstrap     from "bootstrap";

const EditPage = () => {

  const navigate=useNavigate()

    const {edit}= useParams()
    console.log(edit)

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] =useState("");

  useEffect(() => {
    axios.get(`http://192.168.4.109:8080/api/contacts/${edit}`)
        .then(res => {
            setName(res.data.name)
            setEmail(res.data.email)
            setPhone(res.data.phone)
        })
        .catch(err => {
            console.log(err)
        })
},[])

const postVal=()=>{
  axios.put(`http://192.168.4.109:8080/api/contacts/${edit}`,{name,email,phone})
  .then(
    res=>{
      console.log(res.data)
  })

  .catch(
    err=>{
      console.log(err)
    })
    
    navigate('/',{replace:true})
}
  
  return (
    <div>
      <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Insert name here"
        class="form-control" 
      /><br></br>
      
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Insert Email here"
        class="form-control" 
      /><br></br>

      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Insert phone number here"
        class="form-control" 
      /><br></br>
    
      <button onClick={postVal} class="btn btn-primary">Insert</button>
      </form>
      {/* <button onClick={navigate("/")}></button> */}
    </div>
  );
};
 
export default EditPage;
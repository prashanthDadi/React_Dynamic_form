
import React from "react";
import { useState} from "react";
import axios from "axios"
import {useNavigate } from "react-router-dom";


const PostDetails = () => {

  const navigate=useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhonenum] = useState("")


const submit=()=>{
  axios.post('http://192.168.4.109:8080/api/contacts',{name,email,phone})
  .then(
    res=>{
      console.log(res.data)
    })
    
    .catch(err => {
      console.log(err)

  })
  navigate('/',{replace:true})
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Insert name here"
      /><br></br>

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Insert Email here"
      /><br></br>
      <input
        type="number"
        value={phone}
        onChange={(e) => setPhonenum(e.target.value)}
        placeholder="Insert phone num here"
      /><br></br>
      <button onClick={submit}>Insert</button>
    </div>
  );

};

export default PostDetails;
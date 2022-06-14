import React,{useState} from 'react'
 
function UserForm(){
    const [firstName,setFirstName]=useState('')
    const[lastName,setlastName]=useState('')
    const submitHandler=e=>{
        e.preventDefault()
    alert(`Hello${firstName} ${lastName}`)
}

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <labe>firstName</labe>
                    <input 
                    type='text'
                    value={firstName}
                    onChange={e=>setFirstName(e.target.value)}
                    />
                    </div>
                    <div>
                        <label>lastName</label>
                        <input type="text"
                        value={lastName}
                        onChange={e=>setlastName(e.target.value)}/>
                    </div>
                    <button >submit</button>
            </form>
        </div>
    )
}
export default UserForm

import React from 'react';
import {useState} from "react"
function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [success,setSuccess]=useState(false);
    const [error,setError]=useState(false);
    const handleUsername=(e)=>{
            setUsername(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
}
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username==="user" && password==="password")
        {
             setSuccess(true);
        }
        else{
            setError(true);
        }
        
        console.log(username);
        console.log(password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            {error && <p>Invalid username or password</p>}
           {success? (<><p>Welcome, user</p></>):( <>
            <div>
            <span>Username:</span><input type="text" value={username} onChange={handleUsername} required/>
            </div>
            <div>
            <span>Password:</span><input type="text" value={password} onChange={handlePassword} required/>
            </div>
            <button>Submit</button>
           
            </>)
}
            </form>
        </div>
    );
}

export default Login;
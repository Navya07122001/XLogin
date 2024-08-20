import React from 'react';
import {useState} from "react"
function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [text,setText]=useState("");
    const [error,setError]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username=="username" && password=="password")
        {
             setText("Welcome, user!")
        }
        else{
            setError("Invalid username or password")
        }
        
        console.log(username);
        console.log(password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            {error && <p>{error}</p>}
           {text.length? (<><p>{text}</p></>):( <>
            <div>
            <span>Username:</span><input type="text" onChange={(e)=>setUsername(e.target.value)} required/>
            </div>
            <div>
            <span>Password:</span><input type="text" onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <button>Submit</button>
           
            </>)
}
            </form>
        </div>
    );
}

export default Login;
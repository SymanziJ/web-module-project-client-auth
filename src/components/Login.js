import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const { push } = useHistory();
    const [cred, setCred] = useState({
        username:"",
        password:""
    });

    const handleChange = (evt) => {
        const { id, value } = evt.target
        setCred({...cred, [id]: value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
            .then(res => {
                localStorage.setItem("token", res.data.token);
                push('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">USERNAME </label>
                    <input onChange={handleChange} type="text" id="username" value={cred.username}/>
                </div>
                <div>
                    <label htmlFor="password">PASSWORD </label>
                    <input onChange={handleChange} type="password" id="password" value={cred.password}/> 
                </div>
                <button type="submit" id="submitLogin" >Submit</button>
            </form>
        </div>
    )
}

export default Login;
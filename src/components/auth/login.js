import React, { useState } from 'react';  
import {Button} from 'reactstrap';


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginButton = (e) => { 
        e.preventDefault()
        const url = 'http://localhost:5000/user/login'
        const body = {
            email: email,
            password: password
        }

        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({user: {email: email, password: password}}),
        }).then(r => r.json())
            .then(robj => props.updateToken(robj.sessionToken));
    }

    return (
        <div>
            <h1 class="text-primary">Login</h1>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            <br />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
                <br/><br/>

            <Button onClick={loginButton} color="primary">Login</Button>
        </div>


    )
}

export default Login;
import React, { useState } from 'react';
import {Button} from 'reactstrap';
import './Auth.css';


const Signup = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signupButton = (e) => {
        e.preventDefault()
        const url = 'http://localhost:5000/user/create'

        fetch(url, {
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            method: 'POST',
            body: JSON.stringify({user: {username: username, email: email, password: password}}),

        }).then(r => r.json())
            .then(robj => props.updateToken(robj.sessionToken));
    }

    return (
        <form>

            <h1 class="text-primary">Sign Up A Friend</h1> 

            <br />
            
            <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); console.log(e); }} />
            <br />

            <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            <Button onClick={signupButton} color="primary"  >Submit</Button>
            <br />
            <br/><br/><br/><br/>
        </form>
    )
};

export default Signup;


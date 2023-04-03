
import { useState, } from "react";

import Navbar from "./Navbar";


const Login = () => {
    const [username, setUsername] = useState('');

    return (
        <div className="">
            <Navbar />
            <div className="login-container">
                <h1>Login Page</h1>
                <input type="text" name="username" value={username} className="username" onChange={e => setUsername(e.target.value)} />
                <input type="text" name="password" className="password" />
            </div>
        </div>


    );
};


export default Login;
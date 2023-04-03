
import { useState } from "react";
import Navbar from "./Navbar";



const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <Navbar />
            <h1>Register Page</h1>
            <form className="register-container">
                <input type="text" name="username" value={username} className="username" onChange={e => setUsername(e.target.value)} />
                <input type="text" name="password" value={password} className="password" onChange={e => setPassword(e.target.value)} />
                <button onClick={Register}></button>
            </form>
        </div >

    )

};


export default Register;
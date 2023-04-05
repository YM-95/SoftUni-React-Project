
import { useState } from "react";
import { register } from "../firebase.config";




const Register = () => {
    const [email, setRegisterEmail] = useState('')
    const [password, setRegisterPassword] = useState('')


    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            await register(email, password)
        } catch (error) {
            console.log(error);
        }

    };


    return (

        <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
            <form className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
                <p className="mb-5 text-3xl uppercase text-gray-600">Register</p>
                <input type="email" name="email" className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autoComplete="off" placeholder="Email" required value={email} onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }} />
                <input type="password" name="password" className="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autoComplete="off" placeholder="Password" required value={password} onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }} />
                <button onClick={handleRegister} className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80" id="login" ><span>Register</span></button>
            </form>
        </div>
    )

};


export default Register;
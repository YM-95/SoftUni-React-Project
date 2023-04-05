import { useState, } from "react";
import { login } from "../firebase.config";



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {

        try {
            await login(email, password)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
            <form class="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md">
                <p class="mb-5 text-3xl uppercase text-gray-600">Login</p>
                <input type="email" name="email" class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Email" required onChange={(event) => { setEmail(event.target.value) }} />
                <input type="password" name="password" class="mb-5 p-3 w-80 focus:border-purple-700 rounded border-2 outline-none" autocomplete="off" placeholder="Password" required onChange={(event) => { setPassword(event.target.value) }} />
                <button onClick={handleLogin} class="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-80" id="login" type="submit"><span>Login</span></button>
            </form>
        </div>

    );
};


export default Login;
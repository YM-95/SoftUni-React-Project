import { Link } from 'react-router-dom'
import logo from '../assets/house.png'
import Home from './Home';
import Catalog from './Catalog';
import Register from './Register';
import Login from './Login';




const Navbar = () => {
    return (
        <header>
            <nav class="flex items-center bg-gray-800 p-3 flex-wrap">

                <span class="text-xl text-white font-bold uppercase tracking-wide"><img class=' w-12 mx-12' src={logo}></img></span>

                <button class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
                    data-target="#navigation">
                    <i class="material-icons">menu</i>
                </button>
                <div class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
                    <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
                        <Link to="/" element={<Home />} class="lg:inline-flex lg:w-auto w-full mx-6 px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white uppercase">
                            <span>Home</span>
                        </Link>
                        <Link to="/catalog" element={<Catalog />} class="lg:inline-flex lg:w-auto w-full mx-6 px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white uppercase" >
                            <span>Catalog</span>
                        </Link>
                        <Link to="/register" element={<Register />} class="lg:inline-flex lg:w-auto w-full mx-6 px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white uppercase">
                            <span>Register</span>
                        </Link>
                        <Link to="/login" element={<Login />} class="lg:inline-flex lg:w-auto w-full mx-6 px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white uppercase">
                            <span>Login</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar;
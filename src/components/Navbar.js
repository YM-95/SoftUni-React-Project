import { Link } from 'react-router-dom'
import logo from '../assets/house.png'
import './Navbar.css'



const Navbar = () => {
    return (
        <header>
            <nav>
                <div className='logoContainer'>
                    <img src={logo} />
                </div>
                <ul className='navigation'>
                    <li className='nav-li'><Link to={'/'} className='link' href="/">Home</Link></li>
                    <li className='nav-li'><Link to={'/login'} className='link' href="/">Login</Link></li>
                    <li className='nav-li'><Link to={'/register'} className='link' href="/">Register</Link></li>
                </ul >
            </nav >
        </header>

    )
}

export default Navbar;
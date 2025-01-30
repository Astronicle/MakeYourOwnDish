import './components.css'
import chefLogo from '../assets/chef.png'

function Navbar() {
    return(
        <>
            <nav className='navbar'>
                <div className='logoContainer'>
                    <img src={chefLogo} alt='Logo' className='logo'></img>
                    <h1>Make Your Own Dish</h1>
                </div>
                <div className='navLinks'>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Sign Up</a>
                    <a href='#'>Login</a>
                    <input type='text' placeholder='Search'></input>
                </div>
            </nav>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default Navbar
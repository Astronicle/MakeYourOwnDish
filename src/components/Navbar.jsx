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
                    <a href='#' className='changeColor'>Home</a>
                    <a href='#' className='changeColor'>About</a>
                    <a href='#' className='changeColor'>Sign Up</a>
                    <a href='#' className='changeColor'>Login</a>
                    <input type='text' placeholder='Search' className='searchBar' name='SearchBar'></input>
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
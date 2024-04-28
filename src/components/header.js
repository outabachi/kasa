import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.png'
import '../style/header.scss';
 
function Header() {
    return (
        <div className='kasa-header'>
        <Link to="/"><img src={logo} alt='kasa' className='kasa-logo' /></Link>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A Propos</Link>
        </nav>
        </div>
    )
}

export default Header
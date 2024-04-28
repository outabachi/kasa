import logo from '../assets/LOGO.png'
import '../style/footer.scss';

function Footer() {
    return (
        <footer>
            <div>
                <img src={logo} alt='kasa' className='kasa-logo' />
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
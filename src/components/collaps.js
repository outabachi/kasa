import '../style/collaps.scss';
import chevron from '../assets/chevron.png'
function Collaps({title ,text}) {
    return (
        <div>
        <div className='kasa-collaps'>
            <h2>{title}</h2>
            <img src={chevron} alt='chevron'  onClick={Ouvrircollaps}/>
        </div>
        <div className='kasa-collaps-text'>
        <p>{text}</p>
        </div>
    </div>
    )
}
function Ouvrircollaps(e) {
    const parentElement = e.target.parentNode;
    const childElement = parentElement.nextElementSibling;
    e.target.classList.toggle('rotate');
    childElement.classList.toggle('active');
    
}

export default Collaps
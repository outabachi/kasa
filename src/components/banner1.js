import '../style/banner1.scss';
import imgbanner from '../assets/imagesource1.png'
function Banner1() {
    return (
        <div className='kasa-banner1'>
       <img src={imgbanner} alt='kasa-banner1' />
       <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner1
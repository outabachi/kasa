import '../style/banner.scss';
import imgbanner from '../assets/imagesource1.png'
function Banner() {
    return (
        <div className='kasa-banner'>
       <img src={imgbanner} alt='kasa-banner' />
       <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner
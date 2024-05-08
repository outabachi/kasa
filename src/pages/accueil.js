import Banner from '../components/banner';
import Cardsection from '../components/cardsection';
import imgbanner1 from '../assets/imagesource1.png'
function Accueil() {
  return (
    <div className='kasa-accueil'>
      <Banner image = {imgbanner1} textbanner = "Chez vous, partout et ailleurs" />
      <Cardsection />
    </div>
  );
}

export default Accueil;

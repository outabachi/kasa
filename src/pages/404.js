import '../style/404.scss';
import { Link } from 'react-router-dom';
function Notfound() {
    return (
      <div className='kasa-404'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </div>
    );
  }
  
  export default Notfound;
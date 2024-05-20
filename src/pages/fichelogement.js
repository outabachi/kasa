import '../style/fichelogement.scss';
import chevron from '../assets/chevron.png'
import Collaps from '../components/collaps';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Fichelogement() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [indexActive, setindexActive] = useState(0);
    useEffect(() => {
        fetch(`/data/logements.json`)
            .then(response => response.json())
            .then((data) => {
                const foundLogement = data.find((logement) => logement.id === id);
                setLogement(foundLogement);
            });
    }, [id]);
    useEffect(() => {
        if (logement) {
            function Caroussel() {
                const numero = document.querySelector('.numero');
                const next = document.getElementById('next');
                const prev = document.getElementById('prev');

                if (logement.pictures.length == 1) {
                    next.classList.add("desactive");
                    prev.classList.add("desactive");
                    numero.classList.add("numdesactive");
                }
            }
            Caroussel();
            function Rating() {
                const rat = logement.rating
                const stars = document.querySelectorAll('.fa-star');
                for (let i = 0; i < rat; i++) {
                    if (stars[i]) {
                        stars[i].classList.add('star');
                    }
                }
            }
            Rating();
        }

    }, [logement]);
    if (logement) {

        return (
            <div className='kasa-fichelogement'>
                <div className='kasa-banner-logement'>
                    <div className='chevron'>
                        <img src={chevron} alt='chevron' id='prev' onClick={() => {
                            let newIndex = indexActive - 1;
                            if (newIndex < 0) newIndex = logement.pictures.length - 1;
                            setindexActive(newIndex);

                        }} />
                        <img src={chevron} alt='chevron' id='next' onClick={() => {
                            let newIndex = indexActive + 1;
                            if (newIndex >= logement.pictures.length) newIndex = logement.pictures.length + 1;
                            setindexActive(newIndex);
                        }} />
                    </div>
                    {logement.pictures.map((picture, index) => (
                        <img className={`img-logement ${index === indexActive ? 'active' : ''}`} key={index} src={picture} alt={`image ${index}`} id={index + 1} />
                    ))}
                    <div className='numero'>
                        <p>
                            {(indexActive + 1)}
                        </p>
                        <p>
                            /
                        </p>
                        <p>
                            {logement.pictures.length}
                        </p>
                    </div>
                </div>
                <div className='aside-fichelogement'>
                    <div className='div-titre-loc-tag'>
                        <div className=''>
                            <h2>{logement.title}</h2>
                            <p>{logement.location}</p>
                        </div>
                        <div className='div-petite-bulle'>
                            {logement.tags.map((tag, index) => (
                                <div className='petite-bulle' key={index}>
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='div-agent-star'>
                        <div className='div-agent-rond'>
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture} />
                        </div>
                        <div className='div-star'>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className='kasa-collaps-logement'>
                    <Collaps title="Déscription" text={logement.description} />
                    <Collaps
                        title="Équipements"
                        text={logement.equipments.map((equipment, index) => (
                            <React.Fragment key={index}>
                                {equipment}
                                <br />
                            </React.Fragment>
                        ))}
                    />
                </div>
            </div>

        );
    }
}



export default Fichelogement;

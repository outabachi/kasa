import '../style/fichelogement.scss';
import chevron from '../assets/chevron.png'
import Collaps from '../components/collaps';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function Fichelogement() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState(null);
    const [indexActive, setindexActive] = useState(0);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`/data/logements.json`)
            .then(response => response.json())
            .then((data) => {
                const foundLogement = data.find((logement) => logement.id === id);
                if (!foundLogement) {
                    navigate('/notfound');
                    setLoading(false);
                } else {
                    setLogement(foundLogement);
                    setLoading(false);
                    
                }
            });
        
    }, [id, navigate]);

    const handleNext = () => {
        setindexActive((prevIndex) => (prevIndex + 1) % logement.pictures.length);
    };

    const handlePrev = () => {
        setindexActive((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
    };

    if (loading) {
        return <div></div>;
    }

        return (
            <div className='kasa-fichelogement'>
                <div className='kasa-banner-logement'>
                    <div className='chevron'>
                        <img src={chevron} alt='chevron' id='prev' className={logement.pictures.length === 1 ? 'desactive' : ''} onClick={handlePrev} />
                        <img src={chevron} alt='chevron' id='next' className={logement.pictures.length === 1 ? 'desactive' : ''} onClick={handleNext} />
                    </div>
                    {logement.pictures.map((picture, index) => (
                        <img className={`img-logement ${index === indexActive ? 'active' : ''}`} key={index} src={picture} alt={`image ${index}`} id={index + 1} />
                    ))}
                    <div className={`numero ${logement.pictures.length === 1 ? 'numdesactive' : ''}`}>
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
                            <i className={`fas fa-star ${0 < logement.rating ? 'star' : ''}`}></i>
                            <i className={`fas fa-star ${1 < logement.rating ? 'star' : ''}`}></i>
                            <i className={`fas fa-star ${2 < logement.rating ? 'star' : ''}`}></i>
                            <i className={`fas fa-star ${3 < logement.rating ? 'star' : ''}`}></i>
                            <i className={`fas fa-star ${4 < logement.rating ? 'star' : ''}`}></i>
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




export default Fichelogement;

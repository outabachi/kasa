import '../style/fichelogement.scss';
import chevron from '../assets/chevron.png'
import star from '../assets/star.png'
import Collaps from '../components/collaps';
import React, { useEffect } from 'react';
function Fichelogement() {
    useEffect(() => {
        Caroussel();
        Rating();
    }, []);
    return (
        <div className='kasa-fichelogement'>
            <div className='kasa-banner-logement'>
                <div className='chevron'>
                    <img src={chevron} alt='chevron' id='prev' onClick={() => {
                        const slides = document.querySelectorAll(".img-logement");
                        const slideActive = document.querySelector(".active");
                        let newIndex = [...slides].indexOf(slideActive) - 1;
                        if (newIndex < 0) newIndex = [...slides].length - 1;
                        slideActive.classList.remove("active");
                        slides[newIndex].classList.add("active");

                    }} />
                    <img src={chevron} alt='chevron' id='next' onClick={() => {
                        const slides = document.querySelectorAll(".img-logement");
                        const slideActive = document.querySelector(".active");
                        let newIndex = [...slides].indexOf(slideActive) + 1;
                        if (newIndex > ([...slides].length - 1)) newIndex = 0;
                        slideActive.classList.remove("active");
                        slides[newIndex].classList.add("active");
                    }} />
                </div>
                {JSON.parse(localStorage.getItem('card')).pictures.map((picture, index) => (
                    <img className='img-logement' key={index} src={picture} alt={`image ${index}`} id={index + 1} />
                ))}
            </div>
            <div className='aside-fichelogement'>
                <div className='div-titre-loc-tag'>
                    <div className=''>
                        <h2>{JSON.parse(localStorage.getItem('card')).title}</h2>
                        <p>{JSON.parse(localStorage.getItem('card')).location}</p>
                    </div>
                    <div className='div-petite-bulle'>
                        {JSON.parse(localStorage.getItem('card')).tags.map((tag, index) => (
                            <div className='petite-bulle' key={index}>
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='div-agent-star'>
                    <div className='div-agent-rond'>
                        <p>{JSON.parse(localStorage.getItem('card')).host.name}</p>
                        <img src={JSON.parse(localStorage.getItem('card')).host.picture} />
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
                <Collaps title="Déscription" text={JSON.parse(localStorage.getItem('card')).description} />
                <Collaps
                    title="Équipements"
                    text={JSON.parse(localStorage.getItem('card')).equipments.map((equipment, index) => (
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
function Caroussel() {
    const slide1 = document.getElementById('1');
    const slides = document.querySelectorAll(".img-logement");
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    slide1.classList.add("active");
    if ([...slides].length == 1) {
        next.classList.add("desactive");
        prev.classList.add("desactive");
    }
}
function Rating() {
    const rat = JSON.parse(localStorage.getItem('card')).rating
    const stars = document.querySelectorAll('.fa-star');
    for (let i = 0; i < rat; i++) {
        if (stars[i]) {
            stars[i].classList.add('star');
        }
    }
}

export default Fichelogement;

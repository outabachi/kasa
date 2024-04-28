import { useState, useEffect } from "react";
import '../style/card.scss';
import { Link } from 'react-router-dom';
function Card () {
    let [cards, setCards] = useState([]);
    useEffect(() => {
        // Récupération des works depuis l'API
        fetch("/data/logements.json")
            // Parse la réponse en JSON
            .then(response => response.json())
            .then((cards) => {
                setCards(cards);
            })
                
        })
        return cards.map((card, index) => (
            <Link to="/pages/fichelogement" className="kasa-card" key={index}>
                <img src={card.cover} alt={card.title} />
                <h4>{card.title}</h4>
                </Link>
        ));
}

    export default Card
import React, { useState } from 'react';
import '../style/collaps.scss';
import chevron from '../assets/chevron.png';

function Collaps({ title, text }) {
    const [estOuvert, setEstOuvert] = useState(false);
    
    const gererToggle = () => {
        setEstOuvert(!estOuvert);
    };

    return (
        <div>
            <div className='kasa-collaps'>
                <h2>{title}</h2>
                <img
                    src={chevron}
                    alt='chevron'
                    onClick={gererToggle}
                    className={estOuvert ? 'rotate' : ''}
                />
            </div>
            <div className={`kasa-collaps-text ${estOuvert ? 'active' : ''}`}>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Collaps;

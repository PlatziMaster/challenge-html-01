import React from 'react';
import '../styles/components/Card.scss';

function Card(props) {
    return(
        <div className="Card">
            <figure className="Card__imgContainer"> 
                <img src="../../resources/imgs/aidan-hancock-455440.png" alt="holallall" />
                <figcaption>Technology</figcaption>
            </figure>
            <h3 className="Card__title">Search Engine Optimizacion And Adverstising</h3>
            <p className="Card__description">There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun.</p>
        </div>
        
    )
}

export default Card;
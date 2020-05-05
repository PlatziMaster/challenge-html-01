import React from 'react';
import '../styles/components/Card.scss';

function Card1(props) {
    return(
        <div className="Card level2">
            <figure className="Card__imgContainer"> 
                <img src="../../resources/imgs/dose-media-344938.png" alt="holallall" />
            </figure>
            <h2 className="Card__category">Technology</h2>
            <h3 className="Card__title">Search Engine Optimizacion And Adverstising</h3>
            <p className="Card__description">There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun.</p>
        </div>
        
    )
}

export default Card1;
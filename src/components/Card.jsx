import React from 'react';
import '../styles/components/Card.scss';

function Card(props) {
    const {level, img, category, title, description} = props;

    return(
        <div className={`Card ${level}`}>
            <figure className="Card__imgContainer"> 
                <img src={img} alt="holallall" />
            </figure>
            <h2 className="Card__category">{category}</h2>
            <h3 className="Card__title">{title}</h3>
            <p className="Card__description">{description}</p>
        </div>
        
    )
}

export default Card;
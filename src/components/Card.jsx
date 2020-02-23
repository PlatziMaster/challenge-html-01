import React from "react";
import "../assets/styles/components/Card.styl";

const Card = props => {
  const { image, title, description, tag, size } = props;

  return (
    <article className={`Card ${size}`}>
      <div className="Card--imgContainer">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="Card--tag">{tag}</div>
      </div>
      <p className="Card--title">{title}</p>
      <p className="Card--description">{description}</p>
    </article>
  );
};

export default Card;

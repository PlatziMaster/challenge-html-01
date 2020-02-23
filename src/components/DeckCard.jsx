import React from 'react';
import '../assets/styles/components/DeckCard.styl';
import image4 from '../assets/static/image4.png';

const DeckCard = props => {
  const { title, description, tag, size } = props;

  return (
    <article className={`DeckCard ${size}`}>
      <div>
        <span className="DeckCard--tag">{tag}</span>
        <figure>
          <img src={image4} alt="" />
        </figure>
      </div>
      <p className="DeckCard--title">{title}</p>
      <p className="DeckCard--description">{description}</p>
    </article>
    /*      <article className="DeckCard item-1">
        <div>
          <span className="DeckCard--tag">TECHNOLOGY</span>
          <figure>
            <img src={image1} alt="" />
          </figure>
        </div>
        <p className="DeckCard--title">
          Searching Engine Optimization And Advertisement
        </p>
        <p className="DeckCard--description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          corporis nostrum exercitationem eos debitis.
        </p>
      </article>
      <article className="DeckCard item-1">
        <section>
          <img src={image3} alt="" />
          <span className="DeckCard--tag">TECHNOLOGY</span>
        </section>
        <p className="DeckCard--title">
          Searching Engine Optimization And Advertisement
        </p>
        <p className="DeckCard--description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          corporis nostrum exercitationem eos debitis.
        </p>
      </article>
      <article className="DeckCard item-2">
        <section>
          <img src={image5} alt="" />
          <span className="DeckCard--tag">TECHNOLOGY</span>
        </section>
        <p className="DeckCard--title">
          Searching Engine Optimization And Advertisement
        </p>
        <p className="DeckCard--description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          corporis nostrum exercitationem eos debitis.
        </p>
      </article>
      <article className="DeckCard">
        <section>
          <img src={image2} alt="" />
          <span className="DeckCard--tag">TECHNOLOGY</span>
        </section>
        <p className="DeckCard--title">
          Searching Engine Optimization And Advertisement
        </p>
        <p className="DeckCard--description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          corporis nostrum exercitationem eos debitis.
        </p>
      </article>
      <article className="DeckCard">
        <section>
          <img src={image4} alt="" />
          <span className="DeckCard--tag">TECHNOLOGY</span>
        </section>
        <p className="DeckCard--title">
          Searching Engine Optimization And Advertisement
        </p>
        <p className="DeckCard--description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          corporis nostrum exercitationem eos debitis.
        </p>
      </article>
      <article className="DeckCard item-2">
        <section>
          <img src={image5} alt="" />
          <span className="DeckCard--tag">TECHNOLOGY</span>
        </section>
        <p className="DeckCard--title">
          Searching Engine Optimization And Advertisement
        </p>
        <p className="DeckCard--description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          corporis nostrum exercitationem eos debitis.
        </p>
      </article>
      <article className="DeckCard">
        <section>
          <img src={image4} alt="" />
          <span className="DeckCard--tag">TECHNOLOGY</span>
        </section>
        <p className="DeckCard--title">
          Searching Engine Optimization And Advertisement
        </p>
        <p className="DeckCard--description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          corporis nostrum exercitationem eos debitis.
        </p>
      </article>
      <article className="DeckCard">
        <section>
          <img src={image4} alt="" />
          <span className="DeckCard--tag">TECHNOLOGY</span>
        </section>
        <p className="DeckCard--title">
          Searching Engine Optimization And Advertisement
        </p>
        <p className="DeckCard--description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          corporis nostrum exercitationem eos debitis.
        </p>
      </article>
      <article className="DeckCard">
        <section>
          <img src={image4} alt="" />
          <span className="DeckCard--tag">TECHNOLOGY</span>
        </section>
        <p className="DeckCard--title">
          Searching Engine Optimization And Advertisement
        </p>
        <p className="DeckCard--description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          corporis nostrum exercitationem eos debitis.
        </p>
      </article>
    </> */
  );
};

export default DeckCard;

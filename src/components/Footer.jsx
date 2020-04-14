import React from 'react';
import '../styles/components/Footer.styl';

const Footer = () => {
  return (
    <>
      <section className="Footer">
        <div className="Footer__layout">
          <div className="Deck">
            <h2>
              Deck
              <span>.</span>
            </h2>
            <p>© 2018 Deck</p>
            <p>Component based UI Kit</p>
          </div>
          <div className="deck__year" />
          <div className="tech">Technology</div>
          <div className="ideas">Ideas</div>
          <div className="leader">Leadership</div>
          <div className="video">Video</div>
          <div className="new">News</div>
          <div className="finance">Finance</div>
          <div className="enter">Entertainment</div>
          <div className="follow">
            <p>Follow Us:</p>
          </div>
          <div className="social" />
          <div className="input">
            <input type="text" placeholder="Your Email" />
            <button type="button" className="button">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

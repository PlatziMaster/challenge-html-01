import React, { useState } from 'react';
import InicialState from '../inicialState';
import Cover from '../components/cover';

const HomeB = () => {
  const filterTag = id => {
    const result = [...InicialState.tags.filter(item => item.id === id)];
    return result[0].name;
  };
  const [carrusel] = useState(InicialState.Article[0]);

  return (
    <section className="HomeB">
      <div className="HomeB__carrusel">
        <Cover
          type="Carrusel"
          img={carrusel.img}
          tag={filterTag(carrusel.tag)}
          title={carrusel.title}
          description={carrusel.description}
          share={carrusel.share}
          view={carrusel.view}
          comment={carrusel.comment}
        />
      </div>
      <div className="HomeB__sm">
        <Cover
          type="sm"
          img={InicialState.Article[1].img}
          tag={filterTag(InicialState.Article[1].tag)}
          title={InicialState.Article[1].title}
          share={InicialState.Article[1].share}
          view={InicialState.Article[1].view}
          comment={InicialState.Article[1].comment}
        />
      </div>
      <div className="HomeB__sm1">
        <Cover
          type="sm"
          img={InicialState.Article[2].img}
          tag={filterTag(InicialState.Article[2].tag)}
          title={InicialState.Article[2].title}
          share={InicialState.Article[2].share}
          view={InicialState.Article[2].view}
          comment={InicialState.Article[2].comment}
        />
      </div>
      <div className="HomeB__sm2">
        <Cover
          type="sm"
          img={InicialState.Article[3].img}
          tag={filterTag(InicialState.Article[3].tag)}
          title={InicialState.Article[3].title}
          share={InicialState.Article[3].share}
          view={InicialState.Article[3].view}
          comment={InicialState.Article[3].comment}
        />
      </div>
      <div className="HomeB__sm3">
        <Cover
          type="sm"
          img={InicialState.Article[4].img}
          tag={filterTag(InicialState.Article[4].tag)}
          title={InicialState.Article[4].title}
          share={InicialState.Article[4].share}
          view={InicialState.Article[4].view}
          comment={InicialState.Article[4].comment}
        />
      </div>
      <div className="HomeB__md">
        <Cover
          type="sm"
          img={InicialState.Article[5].img}
          tag={filterTag(InicialState.Article[5].tag)}
          title={InicialState.Article[5].title}
          share={InicialState.Article[5].share}
          view={InicialState.Article[5].view}
          comment={InicialState.Article[5].comment}
        />
      </div>
      <div className="HomeB__cardBg">
        <h3 className="HomeB__cardBg-title">
          This tie brand is bucking the retail apocalypse with a massive store
        </h3>
        <p className="HomeB__cardBg-text">
          The universe is constantly changing, moving. Some would say it’s a
          “living” thing because you never know what you are going to see on any
          given night.
        </p>
        <button className="HomeB__cardBg-btn btn-trasnparent" type="button">
          READ MORE
        </button>
      </div>
      <div className="HomeB__info">
        <section className="Infography">
          <h3>FEATURED STORIES</h3>
          <ol>
            <span>1.</span>
            <li>Compare Prices: Find The Best Computer Accessory</li>
            <span>2.</span>
            <li>Why You Should Use External IT Support</li>
            <span>3.</span>
            <li>Why You Should Use In-House IT Support</li>
            <span>4.</span>
            <li>Choosing The Best Audio Player Software</li>
            <span>5.</span>
            <li>Addiction When Gambling Becomes A Problem</li>
          </ol>
        </section>
      </div>
    </section>
  );
};

export default HomeB;

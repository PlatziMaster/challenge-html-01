import React from 'react';
import InicialState from '../inicialState';
import Card from '../components/card';

const HomeC = () => {
  const filterTag = id => {
    const result = [...InicialState.tags.filter(item => item.id === id)];
    return result[0].name;
  };

  return (
    <section className="HomeC">
      <div className="HomeC-card1">
        <Card
          type="Card2"
          img={InicialState.Article[1].img}
          tag={filterTag(InicialState.Article[1].tag)}
          title={InicialState.Article[1].title}
          description={InicialState.Article[1].description}
          share={InicialState.Article[1].share}
          view={InicialState.Article[1].view}
          comment={InicialState.Article[1].comment}
        />
      </div>
      <div className="HomeC-bgcard">
        <Card
          type="bgPrimary"
          tag={filterTag(InicialState.Article[1].tag)}
          title={InicialState.Article[1].title}
          description={InicialState.Article[1].description}
          share={InicialState.Article[1].share}
          view={InicialState.Article[1].view}
          comment={InicialState.Article[1].comment}
        />
      </div>
      <div className="HomeC-card2">
        <Card
          type="Card2"
          img={InicialState.Article[3].img}
          tag={filterTag(InicialState.Article[3].tag)}
          title={InicialState.Article[3].title}
          description={InicialState.Article[3].description}
          share={InicialState.Article[3].share}
          view={InicialState.Article[3].view}
          comment={InicialState.Article[3].comment}
        />
      </div>
      <div className="HomeC-avatar">
        <Card
          type="avatar"
          tag={filterTag(InicialState.Article[4].tag)}
          title={InicialState.Article[4].title}
          description={InicialState.Article[4].description}
          avatar={InicialState.Article[4].avatar}
          name={InicialState.Article[4].name}
        />
        <Card
          type="avatar"
          tag={filterTag(InicialState.Article[8].tag)}
          title={InicialState.Article[8].title}
          description={InicialState.Article[8].description}
          avatar={InicialState.Article[8].avatar}
          name={InicialState.Article[8].name}
        />
        <Card
          type="avatar"
          tag={filterTag(InicialState.Article[6].tag)}
          title={InicialState.Article[6].title}
          description={InicialState.Article[6].description}
          avatar={InicialState.Article[6].avatar}
          name={InicialState.Article[6].name}
        />
      </div>
      <div className="HomeC-card3">
        <Card
          type="Card2"
          tag={filterTag(InicialState.Article[4].tag)}
          title={InicialState.Article[4].title}
          description={InicialState.Article[4].description}
          share={InicialState.Article[4].share}
          view={InicialState.Article[4].view}
          comment={InicialState.Article[4].comment}
        />
      </div>
      <div className="HomeC-card4">
        <Card
          type="Card2"
          tag={filterTag(InicialState.Article[2].tag)}
          title={InicialState.Article[2].title}
          description={InicialState.Article[2].description}
          share={InicialState.Article[2].share}
          view={InicialState.Article[2].view}
          comment={InicialState.Article[2].comment}
        />
      </div>
      <div className="HomeC-card5">
        <Card
          type="avatar-Portada"
          img={InicialState.Article[1].img}
          title={InicialState.Article[6].title}
          description={InicialState.Article[6].description}
          avatar={InicialState.Article[6].avatar}
        />
      </div>
    </section>
  );
};

export default HomeC;

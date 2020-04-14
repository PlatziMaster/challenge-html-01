import React from 'react';
import InicialState from '../inicialState';
import Card from '../components/card';

const Home = () => {
  const filterTag = id => {
    const result = [...InicialState.tags.filter(item => item.id === id)];
    return result[0].name;
  };

  return (
    <section className="Home">
      {InicialState.Article.map(art => (
        <Card
          type="Card"
          key={art.id}
          img={art.img}
          title={art.title}
          description={art.description}
          tag={filterTag(art.tag)}
        />
      ))}
    </section>
  );
};

export default Home;

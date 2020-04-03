import React from 'react';
import InicialState from '../inicialState';
import Card from '../components/card';

const CategoryA = () => {
  const filterTag = id => {
    const result = [...InicialState.tags.filter(item => item.id === id)];
    return result[0].name;
  };
  return (
    <section className="CategoryA">
      <div className="CategoryA__content">
        <section className="CategoryA__content-cards">
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
      </div>
      <div className="CategoryA__info">
        <section className="Infography">
          <h3 className="text-Primary">WEEKLY</h3>
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

export default CategoryA;

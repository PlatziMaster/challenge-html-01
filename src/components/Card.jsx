import React from 'react';

import '../assets/styles/App.styl';
// Aqui lo que hacemos en realidad es una mala practica, ya que es declarativo cada propiedad lo que en supuesto deberia ser algo mucho mas especifico, ahora bien en la funcion se le declaran que propiedades del areglo desfragmentado son las que vamos a usar, en este caso usaremos todo a excepcion del id, como son elementos que varian segun su id pues los elementos se encierran en corchetes y con esto aseguramos que solo demuestre los datos del arreglo del otro documento
function Card({ title, type, image, description }) {
  return (
    <div>
      <div className="Card">
        <div className="Card__image">
          <img src={image} alt="imagen" />
        </div>
        <div className="Card__label">
          <p>{type}</p>
        </div>
        <div className="Card__title">
          <h2>{title}</h2>
        </div>
        <div className="Card__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

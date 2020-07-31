import React from 'react';
import camara from '../img/camara.png';
import celular from '../img/celular.png';
import reloj from '../img/reloj.png';
import dron from '../img/dron.png';
import tablet from '../img/tablet.png';

const Main = () => {
  return (
    <div className="container">
      <div className="item level-1">
        <img src={camara} alt="imagen01" />
        <div className="item__tag">
          <p>technology</p>
        </div>
        <div className="item__content">
          <h3>Un titulo impresionante</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            maxime?
          </p>
        </div>
      </div>
      <div className="item level-3">
        <img src={celular} alt="imagen01" />
        <div className="item__tag">
          <p>technology</p>
        </div>
        <div className="item__content">
          <h3>Un titulo impresionante</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            maxime?
          </p>
        </div>
      </div>
      <div className="item level-1">
        <img src={reloj} alt="imagen01" />
        <div className="item__tag">
          <p>technology</p>
        </div>
        <div className="item__content">
          <h3>Un titulo impresionante</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            maxime?
          </p>
        </div>
      </div>
      <div className="item level-1">
        <img src={tablet} alt="imagen01" />
        <div className="item__tag">
          <p>news</p>
        </div>
        <div className="item__content">
          <h3>Un titulo impresionante</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            maxime?
          </p>
        </div>
      </div>
      <div className="item level-3">
        <img src={dron} alt="imagen01" />
        <div className="item__tag">
          <p>technology</p>
        </div>
        <div className="item__content">
          <h3>Un titulo impresionante</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            maxime?
          </p>
        </div>
      </div>
      <div className="item level-1">
        <img src={reloj} alt="imagen01" />
        <div className="item__tag">
          <p>ideas</p>
        </div>
        <div className="item__content">
          <h3>Un titulo impresionante</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            maxime?
          </p>
        </div>
      </div>
      <div className="item level-1">
        <img src={tablet} alt="imagen01" />
        <div className="item__tag">
          <p>technology</p>
        </div>
        <div className="item__content">
          <h3>Un titulo impresionante</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            maxime?
          </p>
        </div>
      </div>
      <div className="item level-3">
        <img src={dron} alt="imagen01" />
        <div className="item__tag">
          <p>entertainment</p>
        </div>
        <div className="item__content">
          <h3>Un titulo impresionante</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            maxime?
          </p>
        </div>
      </div>
      <div className="item level-1">
        <img src={reloj} alt="imagen01" />
        <div className="item__tag">
          <p>technology</p>
        </div>
        <div className="item__content">
          <h3>Un titulo impresionante</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
            maxime?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

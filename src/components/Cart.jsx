import React from 'react';
import Image from '../../resources/imgs/dose-media-344938.png';

const Cart = () => {
  return (
    <div className="targer">
      <div className="target-imgContainer">
        <img src={Image} alt="" className="target-imgContainer__img" />
        <h1 className="target-imgContainer__redTitle">g</h1>
      </div>
      <div className="targer-description">
        <h2 className="targer-description__subtitle">g</h2>
        <p clasName="targer-description__paragraph">
          El electrón tiene una carga eléctrica de −1,6 × 10−19 C y una masa de
          9,1 × 10-31 kg , que es aproximadamente 1.800 veces menor que la masa
          del protón o a la del neutrón. El electrón es una partícula elemental
          (o al menos eso pensamos hoy en día), lo cual significa que no posee
          ningún tipo de subestructura.
        </p>
      </div>
    </div>
  );
};

export default Cart;

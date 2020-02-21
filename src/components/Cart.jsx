import React from 'react';
import Image from '../../resources/imgs/dose-media-344938.png';
import '../styles/components/Cart.styl';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-imgContainer">
        <div className="cart-imgContainer__redTitleContainer">
          <h1 className="imgContainer-redTitleContainer__redTitle">
            EVO-DE-EVOlucion
          </h1>
        </div>
        <img src={Image} alt="" className="cart-imgContainer__img" />
      </div>
      <div className="cart-description">
        <h2 className="cart-description__subtitle">Evolucionas al verlo</h2>
        <p className="cart-description__paragraph">
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

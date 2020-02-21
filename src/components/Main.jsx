/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import '../styles/components/Main.styl';

const Main = () => {
  const images = [
    {
      id: 1,
      url:
        'https://firebasestorage.googleapis.com/v0/b/platzi-master-d7573.appspot.com/o/reto1%20html-css%2Faidan-hancock-455440.png?alt=media&token=b2a648a2-3a3e-43c5-96ba-479b1259197f',
      height: 'small',
    },
    {
      id: 2,
      url:
        'https://firebasestorage.googleapis.com/v0/b/platzi-master-d7573.appspot.com/o/reto1%20html-css%2Fcosa1.jpg?alt=media&token=354e1cd4-4e24-4d81-a74a-2cc2b48cf67a',
      height: 'medium',
    },
    {
      id: 3,
      url:
        'https://firebasestorage.googleapis.com/v0/b/platzi-master-d7573.appspot.com/o/reto1%20html-css%2Fcrew-22235.png?alt=media&token=0cda4e10-68c7-4ddc-8d31-b9d4f9ca86ce',
      height: 'small',
    },
    {
      id: 4,
      url:
        'https://firebasestorage.googleapis.com/v0/b/platzi-master-d7573.appspot.com/o/reto1%20html-css%2Ffuture.jpg?alt=media&token=f2283ceb-9ced-4358-93b5-e661d6d89819',
      height: 'large',
    },
    {
      id: 5,
      url:
        'https://firebasestorage.googleapis.com/v0/b/platzi-master-d7573.appspot.com/o/reto1%20html-css%2Fjeff-sheldon-264920.png?alt=media&token=518b5081-c3d6-4649-8f75-e3db48d2cd1f',
      height: 'small',
    },
    {
      id: 6,
      url:
        'https://firebasestorage.googleapis.com/v0/b/platzi-master-d7573.appspot.com/o/reto1%20html-css%2Fannie-spratt-213059.png?alt=media&token=f62dd6bc-405b-4bea-b163-ce0e3fbcc7ae',
      height: 'small',
    },
    {
      id: 7,
      url:
        'https://firebasestorage.googleapis.com/v0/b/platzi-master-d7573.appspot.com/o/reto1%20html-css%2Fdose-media-344938.png?alt=media&token=128495cb-9872-4b2c-bd9c-781273fd2328',
      height: 'medium',
    },
    {
      id: 8,
      url:
        'https://i.pinimg.com/564x/8d/f3/45/8df345a1f0a54d476e7a24cd6425c913.jpg',
      height: 'small',
    },
    {
      id: 9,
      url:
        'https://i.pinimg.com/564x/61/ee/20/61ee205c70b91f2fa9aa5060bce2de3e.jpg',
      height: 'medium',
    },
  ];
  const targetSize = height => {
    switch (height) {
      case 'small':
        return 'item level-3';
      case 'medium':
        return 'item level-2';
      case 'large':
        return 'item level-1';
      default:
        return 'item';
    }
  };
  return (
    <div className="Main">
      {images &&
        images.map(({ id, url, height }) => {
          return (
            <div key={id} className={targetSize(height)}>
              <img atl="hand" src={url} />
            </div>
          );
        })}
    </div>
  );
};

export default Main;

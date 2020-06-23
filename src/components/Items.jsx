import React from 'react';
import Item from './Item';
import '../styles/components/Items.styl';

const lists = {
  uno: {
    img: '../../resources/imgs/dose-media-344938.png',
    title: 'using banner stands to increase trade show traffic',
    description:
      'There is a lot if exciting stuff going on in the stars above us that macke astronomy so much fun',
    category: 'technology',
  },
  dos: {
    img: '../../resources/imgs/aidan-hancock-455440.png',
    title: 'Search engine optimization and advertising',
    description:
      'There is a lot if exciting stuff going on in the stars above us that macke astronomy so much fun',
    category: 'technology',
  },
  tres: {
    img: '../../resources/imgs/crew-22235.png',
    title: 'writing a good headline for your advertisement',
    description:
      'There is a lot if exciting stuff going on in the stars above us that macke astronomy so much fun',
    category: 'finance',
  },
  cuatro: {
    img: '../../resources/imgs/annie-spratt-213059.png',
    title:
      '6 powerful tips to creating testimonials that shell your products fast',
    description:
      'There is a lot if exciting stuff going on in the stars above us that macke astronomy so much fun',
    category: 'technology',
  },
  cinco: {
    img: '../../resources/imgs/jeff-sheldon-264920.png',
    title: '15 tips to increase your adwords profis',
    description:
      'There is a lot if exciting stuff going on in the stars above us that macke astronomy so much fun',
    category: 'technology',
  },
};

const Items = () => (
  <section className="itemsContainer">
    <Item {...lists.uno} />
    <Item {...lists.dos} />
    <Item {...lists.tres} />
    <Item {...lists.cuatro} />
    <Item {...lists.cinco} />
    <Item {...lists.uno} />
    <Item {...lists.dos} />
    <Item {...lists.tres} />
    <Item {...lists.cuatro} />
  </section>
);

export default Items;

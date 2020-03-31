import React from 'react';
import '../styles/components/Section.css';

import Cards from './Cards';

class Section extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          class: 'section__item--level-1',
          url: './resources/imgs/dose-media-344938.png',
          label: 'Technology',
          title: 'Using Banners Will Increase Trade Show Traffic',
          description:
            'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
        },
        {
          class: 'section__item--level-2',
          url: './resources/imgs/aidan-hancock-455440.png',
          label: 'Technology',
          title: 'Search Engine Optimization And Advertising',
          description:
            'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
        },
        {
          class: 'section__item--level-1',
          url: './resources/imgs/crew-22235.png',
          label: 'Finance',
          title: 'How to Write A Good Headline For Facebook Ads',
          description:
            'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
        },
        {
          class: 'section__item--level-1',
          url: './resources/imgs/jeff-sheldon-264920.png',
          label: 'Entertainment',
          title: '15 Tips To Increase Your Adwords Profits',
          description:
            'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
        },
        {
          class: 'section__item--level-2',
          url: './resources/imgs/annie-spratt-213059.png',
          label: 'Technology',
          title:
            '6 Powerful Tips For Creating Testimonials That Sell Your Products Fast',
          description:
            'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
        },
        {
          class: 'section__item--level-1',
          url: './resources/imgs/dose-media-344938.png',
          label: 'Technology',
          title: 'Using Banners Will Increase Trade Show Traffic',
          description:
            'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
        },
        {
          class: 'section__item--level-1',
          url: './resources/imgs/jeff-sheldon-264920.png',
          label: 'Entertainment',
          title: '15 Tips To Increase Your Adwords Profits',
          description:
            'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
        },
        {
          class: 'section__item--level-1',
          url: './resources/imgs/crew-22235.png',
          label: 'Finance',
          title: 'How to Write A Good Headline For Facebook Ads',
          description:
            'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
        },
        {
          class: 'section__item--level-3',
          url: './resources/imgs/aidan-hancock-455440.png',
          label: 'Technology',
          title: 'Search Engine Optimization And Advertising',
          description:
            'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.',
        },
      ],
    };
  }

  render() {
    return (
      <div className="section">
        {this.state.cards.map(card => (
          <Cards
            class={card.class}
            url={card.url}
            label={card.label}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    );
  }
}

export default Section;

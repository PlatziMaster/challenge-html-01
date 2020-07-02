import React from 'react';
import Card from '../components/Card';
import '../styles/components/Home.styl';

import img1 from '../assets/static/aidan-hancock-455440.png';
import img2 from '../assets/static/annie-spratt-213059.png';
import img3 from '../assets/static/crew-22235.png';
import img4 from '../assets/static/dose-media-344938.png';
import img5 from '../assets/static/jeff-sheldon-264920.png';
const Home = () => {
  return (
    <section className="container">
      <Card
        img={img4}
        area="Tecnology"
        title="Using Banner Stands To Increase Trade Show Traffic"
        description="There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun"
      />
      <Card
        img={img1}
        area="Tecnology"
        title="Search Engine Optimization And Advertising"
        description="There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun"
      />
      <Card
        img={img3}
        area="Tecnology"
        title="Writing A Good Headline For your Advertisement"
        description="There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun"
      />
      <Card
        img={img2}
        area="Tecnology"
        title="6 Powerful Tips To Creating Testimonials That Sell Your Products Fast"
        description="There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun"
      />
      <Card
        img={img5}
        area="Tecnology"
        title="15 Tips To Increase Your Adwords Profits"
        description="There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun"
      />
      <Card
        img={img4}
        area="Tecnology"
        title="Using Banner Stands To Increase Trade Show Traffic"
        description="There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun"
      />
      <Card
        img={img1}
        area="Tecnology"
        title="Search Engine Optimization And Advertising"
        description="There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun"
      />
      <Card
        img={img3}
        area="Tecnology"
        title="Writing A Good Headline For your Advertisement"
        description="There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun"
      />
      <Card
        img={img2}
        area="Tecnology"
        title="6 Powerful Tips To Creating Testimonials That Sell Your Products Fast"
        description="There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun"
      />
      <Card
        img={img5}
        area="Tecnology"
        title="15 Tips To Increase Your Adwords Profits"
        description="There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun"
      />
    </section>
  );
};

export default Home;

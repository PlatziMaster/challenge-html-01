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
        img={img1}
        area="Tecnology"
        title="Solid sdfsdfsdf sdf sdfdsdsdsfds dsf fsd sd fdstyrtyrtytrf"
        description="Patrones solid sdjkdsbfbkjhfdsbfds"
        classname="card"
      />
      <Card
        img={img2}
        area="Tecnology"
        title="Solid"
        description="Patrones solid sdjkdsbfbkjhfdsbfds"
        classname="card"
      />
      <Card
        img={img3}
        area="Tecnology"
        title="Solid"
        description="Patrones solid"
        classname="card"
      />
      <Card
        img={img4}
        area="Tecnology"
        title="Solid"
        description="Patrones solid"
        classname="card"
      />
      <Card
        img={img5}
        area="Tecnology"
        title="Solid"
        description="Patrones solid sdjkdsbfbkjhfdsbfds"
        classname="card"
      />
      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTP07VDV4gEhA5xmPwm5hJh8tYkcEOtpjCbHg&usqp=CAU"
        area="Tecnology"
        title="Solid"
        description="Patrones solid"
        classname="card"
      />
    </section>
  );
};

export default Home;

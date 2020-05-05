import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import CardList from './components/CardList.js';
import Footer from './components/Footer';

import './styles/main.scss';

const containerHeard = document.getElementById('header');
const containerCard = document.getElementById('card');
const containerFooter = document.getElementById('footer');

ReactDOM.render(<Header />, containerHeard);
ReactDOM.render(<CardList />, containerCard);
ReactDOM.render(<Footer />, containerFooter);


/* 
<Card 
img="../../resources/imgs/aidan-hancock-455440.png"
category="Technology"
title="Search Engine Optimizacion And Adverstising"
description="There is a lot of exiting stuff going on in the stars above us that make astronomy so much fun."
/>

*/
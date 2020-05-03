import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Card from './components/Card';

import './styles/main.scss';

const containerCard = document.getElementById('card');

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<div className="card__container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                </div>, containerCard);

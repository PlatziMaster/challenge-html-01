import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Card from './components/Card';

import './styles/main.scss';

const containerCard = document.getElementById('card');

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<div className="container__Card">
                <Card />
                <Card />
                <Card />
                <Card />
                </div>, containerCard);

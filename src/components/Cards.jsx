import React from 'react';
import '../styles/components/Cards.css';

// eslint-disable-next-line react/prefer-stateless-function
class Cards extends React.Component {
  render() {
    return (
      <div className={`section__item ${this.props.class}`}>
        <img src={this.props.url} alt="" />
        <div className="section__item-label">{this.props.label}</div>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Cards;

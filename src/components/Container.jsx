import React from 'react';
import ListItems from './ListItems';
import '../styles/components/App.styl';

const Container = () => {
  return (
    <div className="container-section">
      <ListItems />
      <ListItems />
      <ListItems />
    </div>
  );
};

export default Container;

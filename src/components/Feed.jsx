import React from 'react';
import Card from './Card';

import initialData from '../../constants/initialData';

import '../styles/components/Feed.css';

const Feed = () => (
  <div className="feed">
    {initialData.map(
      ({ id, category, title, description, imageInfo, level }) => (
        <Card
          key={`Card-${id}`}
          imageInfo={imageInfo}
          title={title}
          description={description}
          category={category}
          level={level}
        />
      )
    )}
  </div>
);

export default Feed;

import React from 'react';
import ListItem from './ListItem';

const Items = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Items;

import React from 'react'
import Card from './Card';

export default ({ cards }) => 
  <div className="suggestions">
    {cards.map(({image, title, description}) => (
      <Card
      key={Math.random()*16}
      image={image}
      title={title}
      description={description}
      />
    ))}
  </div>
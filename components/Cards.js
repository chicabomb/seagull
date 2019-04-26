import React from 'react'
import Card from './Card';

const Cards = ({ cards }) => 
  <div className="scroll-area">
    <div className="cards">
      {cards.map(({image, title, description}) => (
        <Card
        key={Math.random()*16}
        image={image}
        title={title}
        description={description}
        />
      ))}
    </div>
    <div className="fade-right"/>
  </div>

export default Cards
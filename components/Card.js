import React from 'react'

const Card = ({image, title, description}) =>
  <div
    key={Math.random()*16}
    style={{backgroundImage: `url(${image})`}}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>

export default Card
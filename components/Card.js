import React from 'react'

export default ({image, title, description}) =>
  <div
    key={Math.random()*16}
    style={{backgroundImage: `url(${image})`}}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>

import React from 'react'
import Context from 'contexts/Context';

export default function Description() {
  return (
  <Context.Consumer>
    {({ description }) => (
      <div className="container">
        <div className="description">
        <p>Berlin <img src="/static/icons/double-way.svg" alt="" /> Florianópolis </p>
          <h3>{description}</h3>
        </div>
      </div>
    )}
  </Context.Consumer>
  )
}

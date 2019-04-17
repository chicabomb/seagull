import React from 'react'
import Context from 'contexts/Context';

export default () => 
  <Context.Consumer>
    {({ tags }) => (
      <div className="tags">
        {tags.map(tag => <div key={Math.random()*16}>{tag}</div>)}
      </div>
    )}
  </Context.Consumer>

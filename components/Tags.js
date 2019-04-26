import React from 'react'
import Context from 'contexts/Context';

export default ({openTagSuggestions}) => 
  <Context.Consumer>
    {({ tags }) => (
      <div className="scroll-area">
        <div className="tags">
          {tags.map(tag => <div onClick={() => openTagSuggestions(tag)} key={Math.random()*16}>{tag}</div>)}
        </div>
      </div>
    )}
  </Context.Consumer>

import React, { useState } from 'react';
import Context from 'contexts/Context';

export default function Description() {
  const [selectedIndex, hightlightImage] = useState(0);
  const changeImage = (index, length) => {
    const nextIndex = index < 0 ?
      length - 1 : 
      index === length ?
      0 :
      index

    hightlightImage(nextIndex)
  }

  return (
  <Context.Consumer>
    {({ images, destination }) => (
      <div className="container">
        <div className="gallery-images">
          {images.map((image, index) => (
            <div
              style={{backgroundImage: `url(${image})`}}
              key={index}
              alt={`image number ${index} from ${destination.city}`}
              onClick={() => changeImage(index)}/>
          ))}
        </div>
        <div className="gallery-highlight" style={{backgroundImage: `url(${images[selectedIndex]})`}} alt={`image highlight from ${destination.city}`}>
            <div className="previous"onClick={() => changeImage(selectedIndex - 1, images.length)}/>
            <div className="next"onClick={() => changeImage(selectedIndex + 1, images.length)}/>
        </div>
      </div>
    )}
  </Context.Consumer>
  )
}

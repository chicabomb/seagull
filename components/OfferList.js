import React from 'react'
import Context from 'contexts/Context';

export default () => {
  const dateFormat  = (date) => new Date(date).toLocaleDateString()
  return (
    <Context.Consumer>
      {({ offers, nearDates }) => (
        <div className="offer-list">
          <h3>Best Deals</h3>
          <div>
            {offers.map(offer => (
              <div className="offer" key={Math.random()*9}>
                <div>
                  <p>{offer.type && offer.type}</p>
                  <span>{offer.currency}</span>
                  <span>{offer.price}</span>
                </div>
                <img src="static/icons/action-right.svg" alt="arrow to select offer" />
              </div>
            ))}
          </div>
          <h3>Near dates</h3>
          <div className="dates">
            {nearDates.map(offer => (
              <div className="offer" key={Math.random()*16}>
                <span>
                  {offer.currency}{offer.price}
                  <img src="static/icons/action-right.svg" alt="arrow to select offer" />
                </span>
                <p>{offer.dates.map(date => <span className="date" key={Math.random()*54}>{dateFormat(date)}</span>)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Context.Consumer>
  )
}
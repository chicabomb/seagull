import React from 'react'
import Context from 'contexts/Context';

const OfferList = () => {
  // const dateFormat  = (date) => new Date(date).toLocaleDateString()
  return (
    <Context.Consumer>
      {({ offers, hotels, flights }) => (
        <div className="column offers">
          <div className="offer-list">
            <h3>Best Deals</h3>
            <div>
              {offers.map(offer => (
                <>
                  <div className="offer" key={Math.random()*9}>
                    <i className="material-icons-outlined" alt={`offer type ${offer.type}`}>{offer.type === 'bundle' ? 'add_box' : offer.type}</i>
                    <h4>{offer.type}</h4>
                    <div>
                      <span>{offer.currency}</span>
                      <span>{offer.price}</span>
                    </div>
                    <p>{offer.description}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="flex small-offers">
            <div className="column">
              <h3>Good hotel options</h3>
              {hotels.map(hotel => (
                <div key={Math.random()*9}>
                  <div>
                    <span>{hotel.currency}</span>
                    <span>{hotel.price}</span>
                    <i className="material-icons-outlined" alt={`offer type hotel`}>hotel</i>
                  </div>
                  <p>{hotel.description}</p>
                </div>
              ))}
            </div>
           <div className="column">
           <h3>Best flight prices</h3>
              {flights.map(flight => (
                <div key={Math.random()*9}>
                  <div>
                    <span>{flight.currency}</span>
                    <span>{flight.price}</span>
                    <i className="material-icons-outlined" alt={`offer type flight`}>flight</i>
                  </div>
                  <p>{flight.description}</p>
                </div>
              ))}
           </div>
          </div>
        </div>
      )}
    </Context.Consumer>
  )
}

export default OfferList
import React from 'react'
import Context from 'contexts/Context';

const Header = () =>
  <Context.Consumer>
    {({ offers }) => (
      <header className="header">
        <div className="brand">
          <img src="/static/brand.svg" alt="Holiday Pirates main brand mascot: Ruby." />
        </div>
        <div className="header-offers">
          {offers.map(offer => (
            <div key={offer.type}>
              {offer.type}s from&nbsp;
              <span>
                {offer.currency}
                {offer.price}
              </span>
              <i className="material-icons-outlined" alt={`offer type ${offer.type}`}>{offer.type === 'bundle' ? 'add_box' : offer.type}</i>
            </div>
          ))}
        </div>
      </header>
    )}
  </Context.Consumer>

export default Header
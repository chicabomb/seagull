import React from 'react'
import Context from 'contexts/Context';

export default () =>
  <Context.Consumer>
    {({ heroOffer }) => (
      <header className="header">
        <div className="brand">
          <img src="/static/brand.svg" alt="Holiday Pirates main brand mascot: Ruby." />
        </div>
        <div className="header-offer">
          Flights from &nbsp;
          <span>
            {heroOffer.currency}
            {heroOffer.price}
          </span>
          <img src="static/icons/arrow-right.svg" alt="arrow to select offer" />
        </div>
      </header>
    )}
  </Context.Consumer>
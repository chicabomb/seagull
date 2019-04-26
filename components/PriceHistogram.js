import React from 'react'
import Context from 'contexts/Context';

const dateFormat = period => {
  const date = new Date(period)
  return `${date.getMonth() + 1}.${date.getUTCFullYear()}`
}
const PriceHistogram = () =>
  <Context.Consumer>
    {({ pricesPerMonth }) => (
      <div className="scroll-area">
        <div className="price-per-month">
          {pricesPerMonth.map(price => (
            <div className="price" style={{height: `${price.value}px`}}>
              <span className="value">{price.value}</span>
              <span className="period">{dateFormat(price.period)}</span>
            </div>
          ))}
        </div>
        <hr className="price-axis"/>
        <div className="fade-right"/>
      </div>
    )}
  </Context.Consumer>

export default PriceHistogram
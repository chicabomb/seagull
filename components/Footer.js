import React from 'react'

const partners = [
  {
    url: 'https://www.mydealz.de/',
    name: 'Mydealz'
  },
  {
    url: 'http://www.gutscheinsammler.de/',
    name: 'Gutscheinsammler'
  },
  {
    url: 'https://www.abo24.de/',
    name: 'Abo24'
  },
  {
    url: 'http://www.chillmo.com/',
    name: 'Chillmo'
  }
]

const Footer = () =>
  <footer>
    <div>
      {partners.map(partner => <a key={partner.name} rel="nofollow noopener noreferrer" href={partner.url} target="_blank">{partner.name}</a>)}
    </div>
    <p>made with ♥ Holiday Pirates 2019 ©</p>
  </footer>

export default Footer
import React from 'react';

import Context from 'contexts/Context';
import BundleResponse from 'contexts/BundleResponse';
import 'isomorphic-fetch';

import 'scss/common.scss';

import Description from 'components/Description';
import Gallery from 'components/Gallery';
import Layout from 'components/Layout';
import Map from 'components/Map';
import OfferList from 'components/OfferList';
import Cards from 'components/Cards';
import Tags from 'components/Tags';

const Flights = ({ query, data }) => 
  <Context.Provider value={BundleResponse.flight}>
    <Layout>
      <Description/>
      <div className="container flex responsive">
        <div className="map">
          welcome to {query.name}
          <Map location={BundleResponse.flight.destination.geo}/>
        </div>
        <OfferList/>
      </div>
      <Tags/>
      <Gallery/>
      <div className="container">
        <h2>Other places that might interest you</h2>
        <Cards cards={BundleResponse.flight.suggestions}/>
      </div>
      <div className="container">
        <h2>Things to do while visiting Florianópolis</h2>
        <Cards cards={BundleResponse.flight.toDo}/>
      </div>
    </Layout>
  </Context.Provider>;

  Flights.getInitialProps = async ({query}) => {
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    // const data = await res.json()
  
    // console.log(`Show data fetched. Count: ${data.length}`)
  
    return {
      query: query
    }
  }
  

export default Flights
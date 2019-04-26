import React, { useState } from 'react';

import Context from 'contexts/Context';
import 'isomorphic-fetch';

import Data from 'data/Data'
import 'scss/common.scss';

import Cards from 'components/Cards';
import Description from 'components/Description';
import Gallery from 'components/Gallery';
import Layout from 'components/Layout';
import Map from 'components/Map';
import OfferList from 'components/OfferList';
import PriceHistogram from 'components/PriceHistogram';
import Tags from 'components/Tags';

const Index = ({ query, data }) => {
  const [isSuggestionsOpen, openTagSuggestions] = useState(null);

  Index.getInitialProps = async ({ query: { horizontal, destination, origin, start, end, min, max } }) => {
    const data = await Data(horizontal, destination, origin, start, end, min, max);

    return {
      query: query,
      data: data
    }
  }

  return (
      <Context.Provider value={data}>
      <Layout>
        <Description/>
        <div className="container flex responsive">
          <div className="map">
            <Map location={data.destination.geo}/>
          </div>
          <OfferList/>
        </div>
        <PriceHistogram />
        <Gallery/>
        <Tags openTagSuggestions={tag => openTagSuggestions(tag)}/>
        {isSuggestionsOpen &&
          <div>
            <h2 className="container">{isSuggestionsOpen} also appears in these searches</h2>
            <Cards cards={data.suggestions}/>
          </div>
        }
        <h2 className="container">Other places that might interest you</h2>
        <Cards cards={data.suggestions}/>
        <h2 className="container">Things to do while visiting Florianópolis</h2>
        <Cards cards={data.toDo}/>
      </Layout>
    </Context.Provider>
  )
}

export default Index
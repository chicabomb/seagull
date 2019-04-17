import React from 'react';

import Context from 'contexts/Context';
import Response from 'contexts/BundleResponse';

import 'scss/common.scss';

import Description from 'components/Description';
import Layout from 'components/Layout';
import Map from 'components/Map';

export default () => (
  <Context.Provider value={Response}>
    <Layout>
      <Description/>
      <Map/>
    </Layout>
  </Context.Provider>
)


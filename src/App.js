import React from 'react';

import Home from './pages/Home.js';
import Diensten from './pages/Diensten.js';
import Tarieven from './pages/Tarieven.js';
import OverOns from './pages/OverOns.js';
import HulpOpAfstand from './pages/HulpOpAfstand.js';
import Klantenservice from './pages/Klantenservice.js';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout.js';
import HeaderBar from './components/Header.js';
import FooterBar from './components/Footer.js';

function App() {
  return (
    <>
      <Router>
        <HeaderBar />
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/diensten' component={Diensten} />
            <Route path='/tarieven' component={Tarieven} />
            <Route path='/over-ons' component={OverOns} />
            <Route path='/hulp-op-afstand' component={HulpOpAfstand} />
            <Route path='/klantenservice' component={Klantenservice} />
          </Switch>
        </Layout>
        <FooterBar />
      </Router>
    </>
  );
}

export default App;

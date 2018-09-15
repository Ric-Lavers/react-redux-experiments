import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './redux/store';
import './styles/App.css';
import HomePage from './pages/HomePage';
import InputPage from './pages/InputPage';


class App extends Component {
  render() {
    console.log( this.props )
    return (
      <Provider store={store}>
        <Router>      
          <Switch>
            <Helmet>
              <title>Redux Experiments</title>
            </Helmet> 
            <Route exact path='/' Component={HomePage}/>
            <Route exact path='/input' Component={InputPage}/>
            hello
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

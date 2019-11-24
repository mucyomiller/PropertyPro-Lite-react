import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import configureStore from './redux/store';
import HomePage from './components/HomePage';
import DashBoardPage from './components/DashBoardPage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import SInglePropertyPage from './components/SinglePropertyPage';
import Page404 from './components/Page404';

import './styles/app.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ToastContainer />
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dasboard" component={DashBoardPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/property/:id" component={SInglePropertyPage} />
        <Route component={Page404} />
      </Switch>
    </Router>
  </Provider>
);

export default App;

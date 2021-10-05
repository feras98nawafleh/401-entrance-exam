import { React, Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CRUD from './components/CRUD';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';

export class App extends Component {
  render() {
    const isAuth = this.props.auth0.isAuthenticated;

    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {isAuth ? <Home /> : <LoginPage />}
            </Route>
            <Route exact path="/FavourtieWatches">
              {isAuth && <CRUD />}
            </Route>
            <Route exact path="/profile">
              {isAuth && <Profile />}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);

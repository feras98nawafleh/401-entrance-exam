import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    const isAuthinticated = this.props.auth0.isAuthenticated;

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Fruits</Navbar.Brand>
        <NavItem>
          {' '}
          <Link to="/" className="nav-link">
            Home{' '}
          </Link>{' '}
        </NavItem>
        {isAuthinticated && (
          <NavItem>
            {' '}
            <Link to="/FavouriteWatches" className="nav-link">
              {' '}
              Favourite Watches/WishList
            </Link>{' '}
          </NavItem>
        )}
        {isAuthinticated && (
          <NavItem>
            {' '}
            <Link to="/profile" className="nav-link">
              {' '}
              Profile
            </Link>{' '}
          </NavItem>
        )}

        {isAuthinticated ? <LogoutButton /> : <LoginButton />}
      </Navbar>
    );
  }
}

export default withAuth0(Header);

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{
          paddingLeft: '650px',
          width: '100%',
          position: 'fixed',
          left: '0px',
          bottom: '0px',
        }}
      >
        <Navbar.Brand>
          Feras Nawafleh @ &copy; Watches Explorer App
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;

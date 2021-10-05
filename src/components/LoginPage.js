import React, { Component } from 'react';
import LoginButton from './LoginButton';

export class LoginPage extends Component {
  render() {
    return (
      <>
        <LoginButton />
        <h1 style={{ textAlign: 'center' }}>
          Please Log In To Display content
        </h1>
      </>
    );
  }
}

export default LoginPage;

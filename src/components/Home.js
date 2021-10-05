import React from 'react';
import axios from 'axios';
import Watches from './Watches';
import { withAuth0 } from '@auth0/auth0-react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watches: [],
    };
  }

  componentDidMount = async () => {
    await axios
      .get(`${process.env.REACT_APP_SERVER}/watches`)
      .then((result) => {
        this.setState({
          watches: result.data,
        });
        console.log(result.data);
      });
  };

  componentDidMount = async () => {
    await axios
      .get(`https://backend-401.herokuapp.com/watches`)
      .then((result) => {
        this.setState({
          watches: result.data,
        });
        console.log(result.data);
      });
  };

  addToWishList = async (title, description, toUSD, image) => {
    const body = {
      title: title,
      description: description,
      toUSD: toUSD,
      image: image,
      email: this.props.auth0.user.email,
    };
    await axios.post(`${process.env.REACT_APP_SERVER}/addFavourite`, body);
    alert('Watch Added to Wish-List');
  };

  render() {
    return (
      <>
        <Watches
          watches={this.state.watches}
          addToWishList={this.addToWishList}
        />
      </>
    );
  }
}

export default withAuth0(Home);

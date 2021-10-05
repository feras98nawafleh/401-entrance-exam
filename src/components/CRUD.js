import React, { Component } from 'react';
import axios from 'axios';
import FavouriteWatches from './FavouriteWatches';
import FavWatchModal from './FavWatchModal';
import { withAuth0 } from '@auth0/auth0-react';

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteWatches: [],
      showModal: false,
      selectedWatches: {},
    };
  }

  componentDidMount = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_SERVER}/favourites?email=${this.props.auth0.user.email}`
      )
      .then((result) => {
        this.setState({
          favouriteWatches: result.data,
        });
      });
  };

  removeFromFavourite = async (_id) => {
    await axios
      .delete(`${process.env.REACT_APP_SERVER}/delete/${_id}`)
      .then((deleteData) => {
        if (deleteData) {
          const newWatch = this.state.favouriteWatches.filter(
            (watch) => watch._id !== _id
          );
          this.setState({
            favouriteWatches: newWatch,
          });
        }
      });
    alert('Watch Removed from Favourites');
  };

  handleUpdateModal = async (e) => {
    e.preventDefault();
    const body = {
      title: e.target.name.title,
      description: e.target.description,
      toUSD: e.target.toUSD,
      image: e.target.photo.image,
    };
    await axios
      .put(
        `${process.env.REACT_APP_SERVER}/update/${this.state.selectedWatches._id}`,
        body
      )
      .then((updateData) => {
        const newWatch = this.state.favouriteWatches.map((watch) => {
          if (watch._id === this.state.selectedWatches._id) {
            watch = updateData.data;
            return watch;
          }
          return watch;
        });

        this.setState({
          favouriteWatches: newWatch,
        });
      });
    this.handleDisUpModal(this.state.selectedWatches);
    alert('Watch info Updated');
  };

  handleDisUpModal = (watch) => {
    this.setState({
      showModal: !this.state.showModal,
      selectedWatches: watch,
    });
  };

  render() {
    return (
      <>
        <FavouriteWatches
          favouriteWatches={this.state.favouriteWatches}
          handleDisUpModal={this.handleDisUpModal}
          removeFromFavourite={this.removeFromFavourite}
        />
        <FavWatchModal
          handleDisUpModal={this.handleDisUpModal}
          showModal={this.state.showModal}
          handleUpdateModal={this.handleUpdateModal}
          selectedWatches={this.state.selectedWatches}
        />
      </>
    );
  }
}

export default withAuth0(Crud);

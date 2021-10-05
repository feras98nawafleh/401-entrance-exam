import React from 'react';
import { Card, Button, Row } from 'react-bootstrap/';

class FavouriteWatches extends React.Component {
  render() {
    return (
      <>
        <Row>
          {this.props.favouriteWatches.map((watch) => {
            return (
              <Card style={{ width: '18rem', margin: '100px' }}>
                <Card.Img
                  variant="top"
                  src={watch.image}
                  style={{ height: '300px' }}
                />
                <Card.Body>
                  <Card.Title>Watches</Card.Title>
                  <Card.Text>Watch Name: {watch.title}</Card.Text>
                  <Card.Text>the price in US Dollar: {watch.toUSD}</Card.Text>
                </Card.Body>
                <Button
                  variant="danger"
                  onClick={() => this.props.removeFromFavourite(watch._id)}
                >
                  Delete
                </Button>
                <Button
                  variant="warning"
                  onClick={() => this.props.handleDisUpModal(watch)}
                >
                  Update
                </Button>
              </Card>
            );
          })}
        </Row>
      </>
    );
  }
}

export default FavouriteWatches;

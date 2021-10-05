import React from 'react';
import { Card, Button, Row } from 'react-bootstrap/';
class Watches extends React.Component {
  render() {
    return (
      <>
        <Row>
          {this.props.watches.map((watch) => {
            return (
              <Card style={{ width: '18rem', margin: '100px' }}>
                <Card.Img
                  variant="top"
                  src={watch.image}
                  style={{ height: '300px' }}
                />
                <Card.Body>
                  <Card.Title>Watches</Card.Title>
                  <Card.Text>Watch Title: {watch.title}</Card.Text>
                  <Card.Text>About the Watch: {watch.description}</Card.Text>
                  <Card.Text>Watch Price in US Dollar {watch.toUSD}</Card.Text>
                </Card.Body>
                <Button
                  variant="primary"
                  onClick={() =>
                    this.props.addToWishList(
                      watch.title,
                      watch.description,
                      watch.toUSD,
                      watch.image
                    )
                  }
                >
                  Add to WishList
                </Button>
              </Card>
            );
          })}
        </Row>
      </>
    );
  }
}

export default Watches;

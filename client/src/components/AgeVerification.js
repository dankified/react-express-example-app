import React from 'react';
import { Modal, Button, Grid, Row, Col } from "react-bootstrap";




class AgeVerification extends React.Component {
    verifyYes = () => {
        this.props.showModal();
    }

    verifyNo = () => {
        window.location.href = 'https://www.disney.com/';
    }

  render() {
      return (
          <Grid>
              <Modal show={this.props.show} onHide={this.handleClose} backdrop="static">
                  <Modal.Header>Please verify your Age</Modal.Header>
                  <Modal.Body>
                      <h1>Are you over 21?</h1>
                      <Row className="show-grid">
                          <Col xs={6}>
                              <Button block onClick={this.verifyYes}>Yes, let me in.</Button>
                          </Col>
                          <Col xs={6}>
                              <Button block onClick={this.verifyNo}>No. Send me away.</Button>
                          </Col>
                      </Row>
                  </Modal.Body>
              </Modal>
          </Grid>
      );
  }
}

 export default AgeVerification;

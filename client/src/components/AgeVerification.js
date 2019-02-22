import React from 'react';
import { Modal, Button, Container, Row, Col } from "react-bootstrap";




class AgeVerification extends React.Component {
    verifyYes = () => {
        this.props.showModal();
    }

    verifyNo = () => {
        window.location.href = "https://wyncode.co";
    }

  render() {
      return <div id="modal">
          <Container>
            <Modal show={this.props.show} onHide={this.handleClose} backdrop="static">
              <Modal.Header id='modalheader' >Please verify your Age</Modal.Header>
              <Modal.Body id='modalbody'>
                <span>Are you over 21?</span>
                <Row className="show-grid">
                  <Col xs={6}>
                    < Button block variant = "warning"
                    onClick = {
                      this.verifyYes
                    } >
                      Beer Me!
                    </Button>
                  </Col>
                  <Col xs={6}>
                    < Button variant = "warning"
                    block onClick = {
                      this.verifyNo
                    } >
                      I'll Wait.
                    </Button>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
          </Container>
        </div>;
  }
}

 export default AgeVerification;

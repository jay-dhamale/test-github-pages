import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./shop.css";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function MyVerticallyCenteredModalhamper1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/hamper4.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Soap Hampers
              </div>
              {/* <div className="product-info">Cost: ₹ 275 per</div>
              <div className="product-info">Weight: 100gm</div> */}
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">Cost as per number of soaps</div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModalhamper2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/hamper7.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Soap Hampers
              </div>
              {/* <div className="product-info">Cost: ₹ 275 per</div>
              <div className="product-info">Weight: 100gm</div> */}
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">Cost as per number of soaps</div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModalhamper3(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/kidsall.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Kids Soap
              </div>
              {/* <div className="product-info">Cost: ₹ 275 per</div>
              <div className="product-info">Weight: 100gm</div> */}
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">Cost as per number of soaps</div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img
                src="Assets/honey-saff-sandalwood2.jpg"
                alt=""
                className="modal-imges"
              />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Honey Saffron Sandalwood Soap
              </div>
              <div className="product-info">Cost: ₹ 275 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal2(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img
                src="Assets/orange-peel.jpg"
                alt=""
                className="modal-imges"
              />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Orange Peel Soap
              </div>
              <div className="product-info">Cost: ₹ 255 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal3(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/aloevera.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Aloe Vera Soap
              </div>
              <div className="product-info">Cost: ₹ 250 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal4(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img
                src="Assets/honey-oatmeal2.jpg"
                alt=""
                className="modal-imges"
              />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Honey Oatmeal Scrub Soap
              </div>
              <div className="product-info">Cost: ₹ 275 per</div>
              <div className="product-info">Weight: 120gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal5(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/lavendar2.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Lavender Soap
              </div>
              <div className="product-info">Cost: ₹ 265 per</div>
              <div className="product-info">Weight: 125gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal6(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/ubtan.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Ubtan Soap
              </div>
              <div className="product-info">Cost: ₹ 275 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal7(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/bluemusk2.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Blue-musk Soap
              </div>
              <div className="product-info">Cost: ₹ 255 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal8(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/champa.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Champa Soap
              </div>
              <div className="product-info">Cost: ₹ 245 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal9(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/charcoal.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Charcoal Soap
              </div>
              <div className="product-info">Cost: ₹ 255 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal10(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/orchid.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Orchid Soap
              </div>
              <div className="product-info">Cost: ₹ 255 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal11(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/peppermint.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Peppermint Soap
              </div>
              <div className="product-info">Cost: ₹ 250 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal12(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/neem-tulsi.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Neem Tulsi Soap
              </div>
              <div className="product-info">Cost: ₹ 265 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal13(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/cherry.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Cherry Soap
              </div>
              <div className="product-info">Cost: ₹ 245 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal14(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img
                src="Assets/chocolate-rose.jpg"
                alt=""
                className="modal-imges"
              />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Chocolate Rose Soap
              </div>
              <div className="product-info">Cost: ₹ 265 per</div>
              <div className="product-info">Weight: 125gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal15(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/eucalyptus.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Eucalyptus
              </div>
              <div className="product-info">Cost: ₹ 250 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal16(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/fruit2.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b>Fruit Soap
              </div>
              <div className="product-info">Cost: ₹ 265 per</div>
              <div className="product-info">Weight: 120gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal17(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img
                src="Assets/green-apple.jpg"
                alt=""
                className="modal-imges"
              />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Green Apple Soap
              </div>
              <div className="product-info">Cost: ₹ 225 per</div>
              <div className="product-info">Weight: 60gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal18(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img
                src="Assets/lemon-menthol.jpg"
                alt=""
                className="modal-imges"
              />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Lemom Menthol Soap
              </div>
              <div className="product-info">Cost: ₹ 255 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal19(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img
                src="Assets/lemongrass2.jpg"
                alt=""
                className="modal-imges"
              />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Lemongrass Soap
              </div>
              <div className="product-info">Cost: ₹ 255 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal20(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/lotus2.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Lotus Soap
              </div>
              <div className="product-info">Cost: ₹ 245 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal21(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/mango.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Mango Soap
              </div>
              <div className="product-info">Cost: ₹ 275 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal22(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/millenium.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Millennium Soap
              </div>
              <div className="product-info">Cost: ₹ 245 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal23(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/mogra.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Mogra Soap
              </div>
              <div className="product-info">Cost: ₹ 245 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal24(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/peach.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Peach Soap
              </div>
              <div className="product-info">Cost: ₹ 275 per</div>
              <div className="product-info">Weight: 120gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal25(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img
                src="Assets/rajnigandha.jpg"
                alt=""
                className="modal-imges"
              />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Rajnigandha Soap
              </div>
              <div className="product-info">Cost: ₹ 245 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal26(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/rose.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Rose Soap
              </div>
              <div className="product-info">Cost: ₹ 255 per</div>
              <div className="product-info">Weight: 125gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal27(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/rosemary.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Rosemary Soap
              </div>
              <div className="product-info">Cost: ₹ 255 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal28(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/sandalwood.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Sandalwood Soap
              </div>
              <div className="product-info">Cost: ₹ 255 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal29(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/strawberry.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Straberry Soap
              </div>
              <div className="product-info">Cost: ₹ 245 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal30(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/teatree.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Tea-Tree Soap
              </div>
              <div className="product-info">Cost: ₹ 255 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal31(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/tumeric.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Turmeric Soap
              </div>
              <div className="product-info">Cost: ₹ 265 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal32(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/vanilla.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> vanilla Soap
              </div>
              <div className="product-info">Cost: ₹ 225 per</div>
              <div className="product-info">Weight: 60gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function MyVerticallyCenteredModal33(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-main-block"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12} md={6} className="modal-col">
              <img src="Assets/jasmine.jpg" alt="" className="modal-imges" />
            </Col>
            <Col xs={6} md={6} className="modal-col">
              <div className="product-heading">
                <b>Name:</b> Jasmine Soap
              </div>
              <div className="product-info">Cost: ₹ 245 per</div>
              <div className="product-info">Weight: 100gm</div>
              <div className="product-heading">
                <b>Description:</b>
              </div>
              <div className="product-info">
                I'm a product detail. I'm a great place to add more information
                about your product such as sizing, material, care and cleaning
                instructions. This is also a great space to write what makes
                this product special and how your customers can benefit from
                this item.
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="modal-close-btn">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function Shop() {
  const [modalShowhamper1, setModalShowhamper1] = useState(false);
  const [modalShowhamper2, setModalShowhamper2] = useState(false);
  const [modalShowhamper3, setModalShowhamper3] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);
  const [modalShow4, setModalShow4] = useState(false);
  const [modalShow5, setModalShow5] = useState(false);
  const [modalShow6, setModalShow6] = useState(false);
  const [modalShow7, setModalShow7] = useState(false);
  const [modalShow8, setModalShow8] = useState(false);
  const [modalShow9, setModalShow9] = useState(false);
  const [modalShow10, setModalShow10] = useState(false);
  const [modalShow11, setModalShow11] = useState(false);
  const [modalShow12, setModalShow12] = useState(false);
  const [modalShow13, setModalShow13] = useState(false);
  const [modalShow14, setModalShow14] = useState(false);
  const [modalShow15, setModalShow15] = useState(false);
  const [modalShow16, setModalShow16] = useState(false);
  const [modalShow17, setModalShow17] = useState(false);
  const [modalShow18, setModalShow18] = useState(false);
  const [modalShow19, setModalShow19] = useState(false);
  const [modalShow20, setModalShow20] = useState(false);
  const [modalShow21, setModalShow21] = useState(false);
  const [modalShow22, setModalShow22] = useState(false);
  const [modalShow23, setModalShow23] = useState(false);
  const [modalShow24, setModalShow24] = useState(false);
  const [modalShow25, setModalShow25] = useState(false);
  const [modalShow26, setModalShow26] = useState(false);
  const [modalShow27, setModalShow27] = useState(false);
  const [modalShow28, setModalShow28] = useState(false);
  const [modalShow29, setModalShow29] = useState(false);
  const [modalShow30, setModalShow30] = useState(false);
  const [modalShow31, setModalShow31] = useState(false);
  const [modalShow32, setModalShow32] = useState(false);
  const [modalShow33, setModalShow33] = useState(false);

  const [isHoveringhamper1, setIsHoveringhamper1] = useState(false);
  const [isHoveringhamper2, setIsHoveringhamper2] = useState(false);
  const [isHoveringhamper3, setIsHoveringhamper3] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);
  const [isHovering3, setIsHovering3] = useState(false);
  const [isHovering4, setIsHovering4] = useState(false);
  const [isHovering5, setIsHovering5] = useState(false);
  const [isHovering6, setIsHovering6] = useState(false);
  const [isHovering7, setIsHovering7] = useState(false);
  const [isHovering8, setIsHovering8] = useState(false);
  const [isHovering9, setIsHovering9] = useState(false);
  const [isHovering10, setIsHovering10] = useState(false);
  const [isHovering11, setIsHovering11] = useState(false);
  const [isHovering12, setIsHovering12] = useState(false);
  const [isHovering13, setIsHovering13] = useState(false);
  const [isHovering14, setIsHovering14] = useState(false);
  const [isHovering15, setIsHovering15] = useState(false);
  const [isHovering16, setIsHovering16] = useState(false);
  const [isHovering17, setIsHovering17] = useState(false);
  const [isHovering18, setIsHovering18] = useState(false);
  const [isHovering19, setIsHovering19] = useState(false);
  const [isHovering20, setIsHovering20] = useState(false);
  const [isHovering21, setIsHovering21] = useState(false);
  const [isHovering22, setIsHovering22] = useState(false);
  const [isHovering23, setIsHovering23] = useState(false);
  const [isHovering24, setIsHovering24] = useState(false);
  const [isHovering25, setIsHovering25] = useState(false);
  const [isHovering26, setIsHovering26] = useState(false);
  const [isHovering27, setIsHovering27] = useState(false);
  const [isHovering28, setIsHovering28] = useState(false);
  const [isHovering29, setIsHovering29] = useState(false);
  const [isHovering30, setIsHovering30] = useState(false);
  const [isHovering31, setIsHovering31] = useState(false);
  const [isHovering32, setIsHovering32] = useState(false);
  const [isHovering33, setIsHovering33] = useState(false);
  const handleMouseOverhamper1 = () => {
    setIsHoveringhamper1(true);
  };

  const handleMouseOuthamper1 = () => {
    setIsHoveringhamper1(false);
  };
  const handleMouseOverhamper2 = () => {
    setIsHoveringhamper2(true);
  };

  const handleMouseOuthamper2 = () => {
    setIsHoveringhamper2(false);
  };
  const handleMouseOverhamper3 = () => {
    setIsHoveringhamper3(true);
  };

  const handleMouseOuthamper3 = () => {
    setIsHoveringhamper3(false);
  };

  const handleMouseOver1 = () => {
    setIsHovering1(true);
  };
  const handleMouseOut1 = () => {
    setIsHovering1(false);
  };
  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };
  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };
  const handleMouseOver4 = () => {
    setIsHovering4(true);
  };

  const handleMouseOut4 = () => {
    setIsHovering4(false);
  };
  const handleMouseOver5 = () => {
    setIsHovering5(true);
  };

  const handleMouseOut5 = () => {
    setIsHovering5(false);
  };
  const handleMouseOver6 = () => {
    setIsHovering6(true);
  };

  const handleMouseOut6 = () => {
    setIsHovering6(false);
  };
  const handleMouseOver7 = () => {
    setIsHovering7(true);
  };

  const handleMouseOut7 = () => {
    setIsHovering7(false);
  };
  const handleMouseOver8 = () => {
    setIsHovering8(true);
  };

  const handleMouseOut8 = () => {
    setIsHovering8(false);
  };
  const handleMouseOver9 = () => {
    setIsHovering9(true);
  };

  const handleMouseOut9 = () => {
    setIsHovering9(false);
  };
  const handleMouseOver10 = () => {
    setIsHovering10(true);
  };

  const handleMouseOut10 = () => {
    setIsHovering10(false);
  };
  const handleMouseOver11 = () => {
    setIsHovering11(true);
  };

  const handleMouseOut11 = () => {
    setIsHovering11(false);
  };
  const handleMouseOver12 = () => {
    setIsHovering12(true);
  };

  const handleMouseOut12 = () => {
    setIsHovering12(false);
  };
  const handleMouseOver13 = () => {
    setIsHovering13(true);
  };

  const handleMouseOut13 = () => {
    setIsHovering13(false);
  };
  const handleMouseOver14 = () => {
    setIsHovering14(true);
  };

  const handleMouseOut14 = () => {
    setIsHovering14(false);
  };
  const handleMouseOver15 = () => {
    setIsHovering15(true);
  };

  const handleMouseOut15 = () => {
    setIsHovering15(false);
  };
  const handleMouseOver16 = () => {
    setIsHovering16(true);
  };

  const handleMouseOut16 = () => {
    setIsHovering16(false);
  };
  const handleMouseOver17 = () => {
    setIsHovering17(true);
  };

  const handleMouseOut17 = () => {
    setIsHovering17(false);
  };
  const handleMouseOver18 = () => {
    setIsHovering18(true);
  };

  const handleMouseOut18 = () => {
    setIsHovering18(false);
  };
  const handleMouseOver19 = () => {
    setIsHovering19(true);
  };

  const handleMouseOut19 = () => {
    setIsHovering19(false);
  };
  const handleMouseOver20 = () => {
    setIsHovering20(true);
  };

  const handleMouseOut20 = () => {
    setIsHovering20(false);
  };
  const handleMouseOver21 = () => {
    setIsHovering21(true);
  };

  const handleMouseOut21 = () => {
    setIsHovering21(false);
  };
  const handleMouseOver22 = () => {
    setIsHovering22(true);
  };

  const handleMouseOut22 = () => {
    setIsHovering22(false);
  };
  const handleMouseOver23 = () => {
    setIsHovering23(true);
  };

  const handleMouseOut23 = () => {
    setIsHovering23(false);
  };
  const handleMouseOver24 = () => {
    setIsHovering24(true);
  };

  const handleMouseOut24 = () => {
    setIsHovering24(false);
  };
  const handleMouseOver25 = () => {
    setIsHovering25(true);
  };

  const handleMouseOut25 = () => {
    setIsHovering25(false);
  };
  const handleMouseOver26 = () => {
    setIsHovering26(true);
  };

  const handleMouseOut26 = () => {
    setIsHovering26(false);
  };
  const handleMouseOver27 = () => {
    setIsHovering27(true);
  };

  const handleMouseOut27 = () => {
    setIsHovering27(false);
  };
  const handleMouseOver28 = () => {
    setIsHovering28(true);
  };

  const handleMouseOut28 = () => {
    setIsHovering28(false);
  };
  const handleMouseOver29 = () => {
    setIsHovering29(true);
  };

  const handleMouseOut29 = () => {
    setIsHovering29(false);
  };
  const handleMouseOver30 = () => {
    setIsHovering30(true);
  };

  const handleMouseOut30 = () => {
    setIsHovering30(false);
  };
  const handleMouseOver31 = () => {
    setIsHovering31(true);
  };

  const handleMouseOut31 = () => {
    setIsHovering31(false);
  };
  const handleMouseOver32 = () => {
    setIsHovering32(true);
  };

  const handleMouseOut32 = () => {
    setIsHovering32(false);
  };
  const handleMouseOver33 = () => {
    setIsHovering33(true);
  };

  const handleMouseOut33 = () => {
    setIsHovering33(false);
  };
  return (
    <div className="shop-main">
      <div className="shop-head">Pick Your Soaps</div>
      <div className="shop-cards">
        <div
          className="shop-card"
          onMouseOver={handleMouseOverhamper1}
          onMouseOut={handleMouseOuthamper1}
        >
          {isHoveringhamper1 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShowhamper1(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModalhamper1
                show={modalShowhamper1}
                onHide={() => setModalShowhamper1(false)}
              />
            </>
          )}
          <div className="shop-imgs-blk">
            <button className="shop-img-text">Best seller</button>
            <img src="Assets/hamper4.jpg" alt="" className="shop-card-imgs" />
          </div>

          <div className="shop-card-head">Soap Hampers </div>
          <div className="shop-card-price">Cost as per number of soaps</div>

          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOverhamper2}
          onMouseOut={handleMouseOuthamper2}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/hamper7.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHoveringhamper2 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShowhamper2(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModalhamper2
                show={modalShowhamper2}
                onHide={() => setModalShowhamper2(false)}
              />
            </>
          )}
          <div className="shop-card-head">Soap Hampers</div>
          <div className="shop-card-price"> Cost as per number of soaps</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOverhamper3}
          onMouseOut={handleMouseOuthamper3}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/kidsall.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHoveringhamper3 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShowhamper3(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModalhamper3
                show={modalShowhamper3}
                onHide={() => setModalShowhamper3(false)}
              />
            </>
          )}
          <div className="shop-card-head">Kids Soap</div>
          <div className="shop-card-price">Cost as per number of soaps</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
      </div>

      <div className="shop-cards">
        <div
          className="shop-card"
          onMouseOver={handleMouseOver1}
          onMouseOut={handleMouseOut1}
        >
          {isHovering1 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow1(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal1
                show={modalShow1}
                onHide={() => setModalShow1(false)}
              />
            </>
          )}
          <div className="shop-imgs-blk">
            <button className="shop-img-text">Best seller</button>
            <img
              src="Assets/honey-saff-sandalwood2.jpg"
              alt=""
              className="shop-card-imgs"
            />
          </div>

          <div className="shop-card-head">Honey Saffron Sandalwood Soap</div>
          <div className="shop-card-price">₹ 275 per 100gm</div>

          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver3}
          onMouseOut={handleMouseOut3}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/aloevera.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering3 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow3(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal3
                show={modalShow3}
                onHide={() => setModalShow3(false)}
              />
            </>
          )}
          <div className="shop-card-head">Aloe Vera Soap</div>
          <div className="shop-card-price">₹ 250 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2}
        >
          <div className="shop-imgs-blk">
            <img
              src="Assets/orange-peel.jpg"
              alt=""
              className="shop-card-imgs"
            />
          </div>
          {isHovering2 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow2(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
              />
            </>
          )}
          <div className="shop-card-head">Orange Peel Soap</div>
          <div className="shop-card-price">₹ 255 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
      </div>
      <div className="shop-cards">
        <div
          className="shop-card"
          onMouseOver={handleMouseOver4}
          onMouseOut={handleMouseOut4}
        >
          <div className="shop-imgs-blk">
            <button className="shop-img-text">Best seller</button>
            <img
              src="Assets/honey-oatmeal2.jpg"
              alt=""
              className="shop-card-imgs"
            />
          </div>
          {isHovering4 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow4(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal4
                show={modalShow4}
                onHide={() => setModalShow4(false)}
              />
            </>
          )}
          <div className="shop-card-head">Honey Oatmeal Scrub Soap</div>
          <div className="shop-card-price">₹ 275 per 120gm</div>

          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver5}
          onMouseOut={handleMouseOut5}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/lavendar2.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering5 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow5(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal5
                show={modalShow5}
                onHide={() => setModalShow5(false)}
              />
            </>
          )}
          <div className="shop-card-head">Lavender Soap</div>
          <div className="shop-card-price">₹ 265 per 125gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver6}
          onMouseOut={handleMouseOut6}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/ubtan.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering6 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow6(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal6
                show={modalShow6}
                onHide={() => setModalShow6(false)}
              />
            </>
          )}
          <div className="shop-card-head">Ubtan Soap</div>
          <div className="shop-card-price">₹ 275 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
      </div>
      <div className="shop-cards">
        <div
          className="shop-card"
          onMouseOver={handleMouseOver7}
          onMouseOut={handleMouseOut7}
        >
          <div className="shop-imgs-blk">
            <button className="shop-img-text">Best seller</button>
            <img src="Assets/bluemusk2.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering7 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow7(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal7
                show={modalShow7}
                onHide={() => setModalShow7(false)}
              />
            </>
          )}
          <div className="shop-card-head">Blue Musk Soap</div>
          <div className="shop-card-price">₹ 255 per 100gm</div>

          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver8}
          onMouseOut={handleMouseOut8}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/champa.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering8 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow8(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal8
                show={modalShow8}
                onHide={() => setModalShow8(false)}
              />
            </>
          )}
          <div className="shop-card-head">Champa Soap</div>
          <div className="shop-card-price">₹ 245 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver9}
          onMouseOut={handleMouseOut9}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/charcoal.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering9 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow9(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal9
                show={modalShow9}
                onHide={() => setModalShow9(false)}
              />
            </>
          )}
          <div className="shop-card-head">Charcoal Soap</div>
          <div className="shop-card-price">₹ 255 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
      </div>
      <div className="shop-cards">
        <div
          className="shop-card"
          onMouseOver={handleMouseOver10}
          onMouseOut={handleMouseOut10}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/orchid.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering10 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow10(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal10
                show={modalShow10}
                onHide={() => setModalShow10(false)}
              />
            </>
          )}
          <div className="shop-card-head">Orchid Soap</div>
          <div className="shop-card-price">₹ 255 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver11}
          onMouseOut={handleMouseOut11}
        >
          <div className="shop-imgs-blk">
            {/* <button className="shop-img-text">Best Seller</button> */}
            <img
              src="Assets/peppermint.jpg"
              alt=""
              className="shop-card-imgs"
            />
          </div>
          {isHovering11 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow11(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal11
                show={modalShow11}
                onHide={() => setModalShow11(false)}
              />
            </>
          )}
          <div className="shop-card-head">Peppermint Soap</div>
          <div className="shop-card-price">₹ 250 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver12}
          onMouseOut={handleMouseOut12}
        >
          <div className="shop-imgs-blk">
            <img
              src="Assets/neem-tulsi.jpg"
              alt=""
              className="shop-card-imgs"
            />
          </div>
          {isHovering12 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow12(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal12
                show={modalShow12}
                onHide={() => setModalShow12(false)}
              />
            </>
          )}
          <div className="shop-card-head">Neem Tulsi Soap</div>
          <div className="shop-card-price">₹ 265 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
      </div>
      <div className="shop-cards">
        <div
          className="shop-card"
          onMouseOver={handleMouseOver13}
          onMouseOut={handleMouseOut13}
        >
          <div className="shop-imgs-blk">
            {/* <button className="shop-img-text">Best Seller</button> */}
            <img src="Assets/cherry.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering13 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow13(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal13
                show={modalShow13}
                onHide={() => setModalShow13(false)}
              />
            </>
          )}
          <div className="shop-card-head">Cherry Soap</div>
          <div className="shop-card-price">₹ 245 per 125gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver14}
          onMouseOut={handleMouseOut14}
        >
          <div className="shop-imgs-blk">
            {/* <button className="shop-img-text">Best Seller</button> */}
            <img
              src="Assets/chocolate-rose.jpg"
              alt=""
              className="shop-card-imgs"
            />
          </div>
          {isHovering14 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow14(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal14
                show={modalShow14}
                onHide={() => setModalShow14(false)}
              />
            </>
          )}
          <div className="shop-card-head">Chocolate Rose Soap</div>
          <div className="shop-card-price">₹ 265 per 125gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver15}
          onMouseOut={handleMouseOut15}
        >
          <div className="shop-imgs-blk">
            <img
              src="Assets/eucalyptus.jpg"
              alt=""
              className="shop-card-imgs"
            />
          </div>
          {isHovering15 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow15(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal15
                show={modalShow15}
                onHide={() => setModalShow15(false)}
              />
            </>
          )}
          <div className="shop-card-head">Eucalyptus Soap</div>
          <div className="shop-card-price">₹ 250 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
      </div>
      <div className="shop-cards">
        <div
          className="shop-card"
          onMouseOver={handleMouseOver16}
          onMouseOut={handleMouseOut16}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/fruit2.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering16 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow16(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal16
                show={modalShow16}
                onHide={() => setModalShow16(false)}
              />
            </>
          )}
          <div className="shop-card-head">Fruit Soap</div>
          <div className="shop-card-price">₹ 265 per 120gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver17}
          onMouseOut={handleMouseOut17}
        >
          <div className="shop-imgs-blk">
            {/* <button className="shop-img-text">Best Seller</button> */}
            <img
              src="Assets/green-apple.jpg"
              alt=""
              className="shop-card-imgs"
            />
          </div>
          {isHovering17 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow17(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal17
                show={modalShow17}
                onHide={() => setModalShow17(false)}
              />
            </>
          )}
          <div className="shop-card-head">Green Apple Soap</div>
          <div className="shop-card-price">₹ 225 per 60gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver18}
          onMouseOut={handleMouseOut18}
        >
          <div className="shop-imgs-blk">
            <img
              src="Assets/lemon-menthol.jpg"
              alt=""
              className="shop-card-imgs"
            />
          </div>
          {isHovering18 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow18(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal18
                show={modalShow18}
                onHide={() => setModalShow18(false)}
              />
            </>
          )}
          <div className="shop-card-head">Lemon Menthol Soap</div>
          <div className="shop-card-price">₹ 255 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
      </div>
      <div className="shop-cards">
        <div
          className="shop-card"
          onMouseOver={handleMouseOver19}
          onMouseOut={handleMouseOut19}
        >
          <div className="shop-imgs-blk">
            <img
              src="Assets/lemongrass2.jpg"
              alt=""
              className="shop-card-imgs"
            />
          </div>
          {isHovering19 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow19(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal19
                show={modalShow19}
                onHide={() => setModalShow19(false)}
              />
            </>
          )}
          <div className="shop-card-head">Lemongrass Soap</div>
          <div className="shop-card-price">₹ 255 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver20}
          onMouseOut={handleMouseOut20}
        >
          <div className="shop-imgs-blk">
            {/* <button className="shop-img-text">Best Seller</button> */}
            <img src="Assets/lotus2.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering20 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow20(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal20
                show={modalShow20}
                onHide={() => setModalShow20(false)}
              />
            </>
          )}
          <div className="shop-card-head">Lotus Soap</div>
          <div className="shop-card-price">₹ 245 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver21}
          onMouseOut={handleMouseOut21}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/mango.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering21 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow21(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal21
                show={modalShow21}
                onHide={() => setModalShow21(false)}
              />
            </>
          )}
          <div className="shop-card-head">Mango Soap</div>
          <div className="shop-card-price">₹ 245 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
      </div>
      <div className="shop-cards">
        <div
          className="shop-card"
          onMouseOver={handleMouseOver22}
          onMouseOut={handleMouseOut22}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/millenium.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering22 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow22(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal22
                show={modalShow22}
                onHide={() => setModalShow22(false)}
              />
            </>
          )}
          <div className="shop-card-head">Millennium Soap</div>
          <div className="shop-card-price">₹ 245 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver23}
          onMouseOut={handleMouseOut23}
        >
          <div className="shop-imgs-blk">
            {/* <button className="shop-img-text">Best Seller</button> */}
            <img src="Assets/mogra.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering23 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow23(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal23
                show={modalShow23}
                onHide={() => setModalShow23(false)}
              />
            </>
          )}
          <div className="shop-card-head">Mogra Soap</div>
          <div className="shop-card-price">₹ 245 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver24}
          onMouseOut={handleMouseOut24}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/peach.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering24 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow24(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal24
                show={modalShow24}
                onHide={() => setModalShow24(false)}
              />
            </>
          )}
          <div className="shop-card-head">Peach Soap</div>
          <div className="shop-card-price">₹ 275 per 120gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
      </div>
      <div className="shop-cards">
        <div
          className="shop-card"
          onMouseOver={handleMouseOver25}
          onMouseOut={handleMouseOut25}
        >
          <div className="shop-imgs-blk">
            <img
              src="Assets/rajnigandha.jpg"
              alt=""
              className="shop-card-imgs"
            />
          </div>
          {isHovering25 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow25(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal25
                show={modalShow25}
                onHide={() => setModalShow25(false)}
              />
            </>
          )}
          <div className="shop-card-head">Rajnigandha Soap</div>
          <div className="shop-card-price">₹ 245 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver26}
          onMouseOut={handleMouseOut26}
        >
          <div className="shop-imgs-blk">
            {/* <button className="shop-img-text">Best Seller</button> */}
            <img src="Assets/rose.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering26 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow26(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal26
                show={modalShow26}
                onHide={() => setModalShow26(false)}
              />
            </>
          )}
          <div className="shop-card-head">Rose Soap</div>
          <div className="shop-card-price">₹ 255 per 125gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver27}
          onMouseOut={handleMouseOut27}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/rosemary.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering27 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow27(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal27
                show={modalShow27}
                onHide={() => setModalShow27(false)}
              />
            </>
          )}
          <div className="shop-card-head">Rosemary Soap</div>
          <div className="shop-card-price">₹ 255 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
      </div>
      <div className="shop-cards">
        <div
          className="shop-card"
          onMouseOver={handleMouseOver28}
          onMouseOut={handleMouseOut28}
        >
          <div className="shop-imgs-blk">
            <img
              src="Assets/sandalwood.jpg"
              alt=""
              className="shop-card-imgs"
            />
          </div>
          {isHovering28 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow28(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal28
                show={modalShow28}
                onHide={() => setModalShow28(false)}
              />
            </>
          )}
          <div className="shop-card-head">Sandalwood Soap</div>
          <div className="shop-card-price">₹ 255 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver29}
          onMouseOut={handleMouseOut29}
        >
          <div className="shop-imgs-blk">
            {/* <button className="shop-img-text">Best Seller</button> */}
            <img
              src="Assets/strawberry.jpg"
              alt=""
              className="shop-card-imgs"
            />
          </div>
          {isHovering29 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow29(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal29
                show={modalShow29}
                onHide={() => setModalShow29(false)}
              />
            </>
          )}
          <div className="shop-card-head">Straberry Soap</div>
          <div className="shop-card-price">₹ 245 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver30}
          onMouseOut={handleMouseOut30}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/teatree.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering30 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow30(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal30
                show={modalShow30}
                onHide={() => setModalShow30(false)}
              />
            </>
          )}
          <div className="shop-card-head">Tea Tree Soap</div>
          <div className="shop-card-price">₹ 255 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
      </div>
      <div className="shop-cards">
        <div
          className="shop-card"
          onMouseOver={handleMouseOver31}
          onMouseOut={handleMouseOut31}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/tumeric.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering31 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow31(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal31
                show={modalShow31}
                onHide={() => setModalShow31(false)}
              />
            </>
          )}
          <div className="shop-card-head">Turmeric Soap</div>
          <div className="shop-card-price">₹ 265 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver32}
          onMouseOut={handleMouseOut32}
        >
          <div className="shop-imgs-blk">
            {/* <button className="shop-img-text">Best Seller</button> */}
            <img src="Assets/vanilla.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering32 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow32(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal32
                show={modalShow32}
                onHide={() => setModalShow32(false)}
              />
            </>
          )}
          <div className="shop-card-head">Vanilla Soap</div>
          <div className="shop-card-price">₹ 225 per 60gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
        <div
          className="shop-card"
          onMouseOver={handleMouseOver33}
          onMouseOut={handleMouseOut33}
        >
          <div className="shop-imgs-blk">
            <img src="Assets/jasmine.jpg" alt="" className="shop-card-imgs" />
          </div>
          {isHovering33 && (
            <>
              <Button
                className="hover-btn"
                onClick={() => setModalShow33(true)}
                active
              >
                Quick view
              </Button>
              <MyVerticallyCenteredModal33
                show={modalShow33}
                onHide={() => setModalShow33(false)}
              />
            </>
          )}
          <div className="shop-card-head">Jasmine Soap</div>
          <div className="shop-card-price">₹ 245 per 100gm</div>
          {/* <button className="shop-card-btn">Add to cart</button> */}
        </div>
      </div>
    </div>
  );
}

export default Shop;

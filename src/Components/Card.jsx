import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { LuBellRing, LuChefHat } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";

const Cards = () => {
  const sectionStyle = {
    backgroundSize: "cover",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: "70%",
    background: "linear-gradient( #d1e8e0)",
    zIndex: 1,
    pointerEvents: "none",
  };

  const cardStyle = {
    height: "200px",
    width: "200px",
    borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
  };

  const blurEffect = {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: "70%",
    background: "linear-gradient(transparent, #c9efbd)",
    zIndex: 1,
    pointerEvents: "none",
  };

  const rowStyle = {
    padding: "30px",
  };

  const cardContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const buttonStyle = {
    height: "40px",
    width: "150px",
    backgroundColor: "#3daf26",
    fontSize: "15px",
    borderRadius: "15px",
    border: "none",
    zIndex: 4,
  };

  return (
    <section className="#" style={sectionStyle}>
      <div style={overlayStyle}></div>
      <Container className="text-center">
        <h1 style={{ paddingTop: "6%" }}>
          Take The Stress Out Of
          <span style={{ color: "#3daf26" }}> Lunch-Prep!</span>
        </h1>

        <Row className="justify-content-center" style={rowStyle}>
          <div style={cardContainerStyle}>
            <Col xs={12} md={4}>
              <Card style={cardStyle}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <LuChefHat size={32} />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Est, laudantium?
                  </p>
                </Card.Body>
                <div style={blurEffect}></div>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card style={cardStyle}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <LuBellRing size={32} />
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </Card.Body>
                <div style={blurEffect}></div>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card style={cardStyle}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  <TbTruckDelivery size={32} />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque.
                  </p>
                </Card.Body>
                <div style={blurEffect}></div>
              </Card>
            </Col>
          </div>
        </Row>

        <Row style={rowStyle}>
          <Col>
            <h1 style={{ paddingTop: "5%", paddingBottom: "5%" }}>
              Why
              <span style={{ color: "#3daf26" }}> Lunsj Pa Dora!</span>
            </h1>
            <p style={{ color: "black" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus eaque magni debitis nisi pariatur numquam nesciunt
              adipisci iure saepe perspiciatis.
            </p>
            <Button style={buttonStyle} className="mx-auto">
              Our Story
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cards;

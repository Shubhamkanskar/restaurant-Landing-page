import { Container, Row, Col, Card } from "react-bootstrap";
import boyimg from "../images/boyimg.jpg";
import girlimg from "../images/girlimg.jpg";

const Reviews = () => {
  const sectionStyle = {
    padding: "50px",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: "70%",
    background: "linear-gradient(transparent, #edfff0)",
    pointerEvents: "none",
    filter: "blur(20px)",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
  };

  return (
    <section style={sectionStyle}>
      <Container style={contentStyle}>
        <h1 className="mt-4 text-center p-4">Reviews</h1>
        <h3 className="text-center">
          We save you serious <span style={{ color: "#aff786" }}>Stress</span>
        </h3>

        <Row className="mt-4">
          <Col md={5} sm={12} className="mb-4">
            <Card style={{ border: "none", padding: "10px" }}>
              <Card.Body>
                <img
                  src={boyimg}
                  className="img-fluid rounded"
                  alt="John Doe"
                />
                <p>
                  <h1 style={{ color: "#aff786" }}>,,</h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.
                </p>
                <h6 className="text-muted">- John Doe</h6>
                <span style={{ color: "gray", fontSize: "10px" }}>
                  -Coowner
                </span>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} sm={16} className="mb-5">
            <Card style={{ border: "none", paddingTop: "50px" }}>
              <Card.Body>
                <img
                  src={girlimg}
                  className="img-fluid rounded"
                  alt="Jane Doe"
                />
                <p>
                  <h1 style={{ color: "#aff786", height: "10px" }}>,,</h1>
                  <br />
                  Integer tincidunt aliquam libero, at sagittis quam malesuada
                  vel. Curabitur nec dui vel justo fermentum malesuada.
                </p>
                <h6 className="text-muted">- Jane Doe</h6>
                <span style={{ color: "gray", fontSize: "10px" }}>-Owner</span>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div style={overlayStyle}></div>
      </Container>
    </section>
  );
};

export default Reviews;

import { Container, Row, Col } from "react-bootstrap";
import ss1 from "../images/ss1.jpeg";
import ss2 from "../images/ss2.jpeg";
import ss3 from "../images/ss3.jpeg";

const Social = () => {
  const sectionStyle = {
    padding: "50px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "80%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <section style={sectionStyle}>
      <Container>
        <h1 style={{ marginBottom: "30px" }}>
          <span style={{ color: "#3daf26" }}>Eat</span>It.
          <span style={{ color: "#3daf26" }}>Love</span>It.
          <span style={{ color: "#3daf26" }}>Tag</span>It.
        </h1>
        <span
          style={{ color: "#3daf26", display: "block", marginBottom: "30px" }}
        >
          #LunchAtMyDoor
        </span>

        <Row className="mt-4">
          <Col lg={4} md={4} sm={12} className="mb-3">
            <img src={ss1} alt="Instagram Screenshot 1" style={imageStyle} />
          </Col>

          <Col lg={4} md={4} sm={12} className="mb-3">
            <img src={ss2} alt="Instagram Screenshot 2" style={imageStyle} />
          </Col>

          <Col lg={4} md={4} sm={12} className="mb-3">
            <img src={ss3} alt="Instagram Screenshot 3" style={imageStyle} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Social;

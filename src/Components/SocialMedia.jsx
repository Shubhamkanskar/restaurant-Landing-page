import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Twitter, Google, Instagram } from "react-bootstrap-icons";

const SocialMedia = () => {
  return (
    <Container>
      <Row
        className="justify-content-center"
        style={{ gap: "10px", padding: "20px" }}
      >
        <Col xs={1} md={1}>
          <Facebook size={30} color="black" />
        </Col>
        <Col xs={1} md={1}>
          <Twitter size={30} color="black" />
        </Col>
        <Col xs={1} md={1}>
          <Google size={30} color="black" />
        </Col>
        <Col xs={1} md={1}>
          <Instagram size={30} color="black" />
        </Col>
      </Row>
    </Container>
  );
};

export default SocialMedia;

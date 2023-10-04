import { Container, Row, Col, Button } from "react-bootstrap";
import Foodimg from "../images/Foodimg.jpg";

const Food = () => {
  return (
    <Container className="Work" fluid>
      <Row>
        <Col>
          <section
            style={{
              position: "relative",
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Foodimg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "white",
              padding: "70px",
              textAlign: "center",
              width: "100%",
            }}
          >
            <h1
              style={{
                width: "80%",
                margin: "0 auto",
                paddingBottom: "10%",
                color: "#edfff0",
                fontSize: "24px",
              }}
            >
              Welcome to Our Event
            </h1>
            <Button
              variant="primary"
              style={{
                backgroundColor: "white",
                color: "#3daf26",
                marginRight: "10px",
                borderRadius: "45px",
                border: "none",
                fontSize: "14px",
              }}
            >
              Register Now
            </Button>
            <Button
              variant="success"
              style={{
                backgroundColor: "transparent",
                borderRadius: "45px",
                border: "1px white solid",
                fontSize: "14px",
              }}
            >
              Food for Event
            </Button>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Food;

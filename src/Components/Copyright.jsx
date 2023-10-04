import { Container, Row, Col } from "react-bootstrap";

const CopyRight = () => {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row className="justify-content-between"></Row>
      </Container>
      <div
        style={{
          backgroundColor: "#222",
          padding: "20px 0",
        }}
      >
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div>
                <h1
                  style={{
                    color: "#fff",
                    margin: "20px 0",
                    fontSize: "20px",
                  }}
                >
                  Copyright © 2023{" "}
                  <span style={{ color: "#3daf26" }}>
                    Conluo Facility Services
                  </span>{" "}
                  AS | made with ❤️ by{" "}
                  <span style={{ color: "#3daf26" }}>Shubham</span>
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default CopyRight;

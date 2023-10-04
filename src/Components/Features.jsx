import { Container, Row, Col, Button } from "react-bootstrap";
import imgloc from "../images/locationlogo.png";
import ReduceFood from "../images/paper-bag.png";
import recyclelogo from "../images/recyclelogo.png";
import Check from "../images/save.png";
import Communative from "../images/public-relation.png";

const FeaturesSection = () => {
  const iconStyle = {
    width: "50px",
    height: "50px",
    filter:
      "invert(27%) sepia(94%) saturate(5840%) hue-rotate(114deg) brightness(92%) contrast(82%)",
  };

  const features = [
    {
      icon: (
        <img
          src={imgloc}
          alt="Locally Sourced"
          style={{ ...iconStyle }}
          className="img-fluid"
        />
      ),
      text: "Locally Sourced",
    },
    {
      icon: (
        <img
          src={ReduceFood}
          alt="Reduced Food Waste"
          style={{ ...iconStyle }}
          className="img-fluid"
        />
      ),
      text: "Reduced Food Waste",
    },
    {
      icon: (
        <img
          src={recyclelogo}
          alt="Eco Friendly Package"
          style={{ ...iconStyle }}
          className="img-fluid"
        />
      ),
      text: "Eco Friendly Package",
    },
    {
      icon: (
        <img
          src={Check}
          alt="Energy efficient package"
          style={{ ...iconStyle }}
          className="img-fluid"
        />
      ),
      text: "Energy efficient package",
    },
    {
      icon: (
        <img
          src={Communative}
          alt="Communative Engagement"
          style={{ ...iconStyle }}
          className="img-fluid"
        />
      ),
      text: "Communative Engagement",
    },
  ];

  return (
    <section className="Sustainability">
      <Container>
        <h1
          style={{ marginBottom: "30px", paddingTop: "5%" }}
          className="text-center"
        >
          Sustainability at{" "}
          <span style={{ color: "#3daf26" }}> Lunch-Prep!</span>
        </h1>

        <Row
          style={{ marginBottom: "30px", paddingTop: "5%" }}
          className="justify-content-center"
        >
          {features.map((feature, index) => (
            <Col key={index} lg={2} md={4} sm={6} xs={12} className="mb-3">
              <div className="feature-item text-center">
                <div className="feature-icon">{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center mt-4">
          <Col lg={6} md={8} sm={10} xs={12} className="text-center">
            <Button
              style={{
                height: "40px",
                width: "150px",
                backgroundColor: "#3daf26",
                fontSize: "14px",
                borderRadius: "15px",
                border: "none",
              }}
            >
              Read More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;

import { Container, Row, Col, Button } from "react-bootstrap";
import CustomForm from "./Form";
import SocialMedia from "./SocialMedia";
import COnluo from "../images/conluo.png";
import CopyRight from "./Copyright";
import Brand from "../images/HomePage_Con-800x459.jpg";

const Footer = () => {
  const buttonStyle = {
    width: "100%",
    backgroundColor: "transparent",
    fontSize: "15px",
    color: "#aff786",
    border: "1px solid #aff786",
  };

  return (
    <footer
      style={{ backgroundColor: "#001f3f", color: "white", marginTop: "10%" }}
      className="bg-text-white"
    >
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} md={2} lg={2} style={{ paddingLeft: "30px" }}>
            <div className="text-left">
              <h1 style={{ fontSize: "20px" }}>Our Address</h1>
              <p style={{ color: "gray" }}>Ole Deviks Vei 10, 066 Oslo</p>
              <Button style={buttonStyle}>View On Map</Button>
              <img
                style={{ width: "100px", height: "100px" }}
                src={COnluo}
                alt="Conluo Logo"
              />
              <h3 style={{ color: "gray", fontSize: "12px" }}>
                Conluo Mat AS ,organisasjonsSummer:920829740
              </h3>
              <img
                src={Brand}
                style={{ width: "250px", height: "70px", marginTop: "20px" }}
              />
            </div>
          </Col>

          {/* Contact Us */}
          <Col xs={12} md={2} lg={2}>
            <div className="text-right">
              <h1 style={{ fontSize: "20px" }}>Contact Us</h1>
              <p style={{ color: "gray" }}>Example@gmail.com</p>
              <p style={{ color: "gray" }}>tlf: 40 00 13 15</p>
              <Button style={buttonStyle}>SEND A MESSAGE</Button>
            </div>
            <SocialMedia />
          </Col>
        </Row>
      </Container>

      <CustomForm />

      <CopyRight />
    </footer>
  );
};

export default Footer;

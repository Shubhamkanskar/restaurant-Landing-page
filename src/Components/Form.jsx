import { Col, Container, Form, FormLabel, Row } from "react-bootstrap";

const CustomForm = () => {
  const contactInfos = [
    {
      name: "Sebastian Fredstad",
      email: "sebastian@conluo.no",
      phoneNumber: "tlf: 47838933",
    },
    {
      name: "Another Person",
      email: "another@example.com",
      phoneNumber: "tlf: 12345678",
    },
  ];

  return (
    <div>
      <Container>
        <Row
          className="justify-content-center"
          style={{
            position: "relative",
            bottom: "70px",
            width: "100%",
            marginBottom: "30px",
            paddingLeft: "27%",
          }}
        >
          <Col xs={12} md={7} lg={7} style={{ position: "relative" }}>
            <Form
              className="bg-dark p-3"
              style={{
                width: "300px",
                position: "absolute",
                bottom: 0,
                marginBottom: 0, // Remove unnecessary margin
              }}
            >
              <Form.Label style={{ color: "#3daf26" }}>
                Fill the form below to experience the flavors of lunsj pa dora
                for free
              </Form.Label>
              <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formNumber">
                <Form.Label>Number:</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your number"
                  required
                />
              </Form.Group>
              <h2
                style={{
                  backgroundColor: "#3daf26",
                  color: "white",
                  fontSize: "14px",
                  paddingTop: "10px",
                  margin: "15px 0",
                }}
              >
                TRY THE LUNSJ PA DORA EXPERIENCE
              </h2>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className="mt-4 text-center">
        <FormLabel>
          If you like to talk to our sales team immediately, contact:
        </FormLabel>
        <Container className="d-flex justify-content-center mt-2">
          <Row xs={1} md={2} className="gx-4 gy-4">
            {contactInfos.map((info, index) => (
              <Col key={index} className="text-center border-none">
                <span style={{ color: "#3daf26" }}>{info.name}</span>
                <p className="m-0">{info.email}</p>
                <p className="">{info.phoneNumber}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CustomForm;

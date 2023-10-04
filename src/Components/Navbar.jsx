import { Navbar, Nav, Container, Button } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./img" />
          </Navbar.Brand>
          <Nav className="me-center">
            <Nav.Link href="#home">lunsj Pa Dora Plans</Nav.Link>
            <Nav.Link href="#Work">How It Works</Nav.Link>
            <Nav.Link href="#pricing">Our Menus </Nav.Link>
            <Nav.Link href="#Sustainablity">Sustainablity </Nav.Link>
          </Nav>
          <Nav>
            <Button
              style={{
                backgroundColor: "#aff786",
                fontSize: "15px",
                borderRadius: "15px ",
                border: "none",
              }}
            >
              Login
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;

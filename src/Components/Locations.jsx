import { Container, Row, Col, ListGroup } from "react-bootstrap";
import locationImage from "../images/grain.png";

const Locations = () => {
  const locations = [
    "Sarsborg",
    "Frekand",
    "Ladban",
    "Sarsborg",
    "Frekand",
    "Ladban",
    "Sarsborg",
    "Frekand",
    "Ladban",
  ];

  // Function to chunk the array into groups of a specified size
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  // Chunk locations into groups of 3
  const groupedLocations = chunkArray(locations, 3);

  return (
    <section>
      <Container className="text-center">
        <h1>Our Locations</h1>
        <img
          src={locationImage}
          alt="Locations"
          style={{ width: "50px", maxWidth: "50px", margin: "20px 0" }}
        />
        <Row>
          {groupedLocations.map((column, colIndex) => (
            <Col key={colIndex} xs={12} md={4}>
              <ListGroup variant="flush">
                {column.map((location, rowIndex) => (
                  <ListGroup.Item key={rowIndex} style={{ border: "none" }}>
                    {location}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Locations;

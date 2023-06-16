import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CarWidget } from "./CartWidget"

export const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Helados | Kosten</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">INICIO</Nav.Link>
        <Nav.Link href="#nosotros">NOSOTROS</Nav.Link>
        <Nav.Link href="#encargo">ENCARGO</Nav.Link>
        <Nav.Link href="#sabores">SABORES</Nav.Link>
        <Nav.Link href="#ubicacion">UBICACION</Nav.Link>
      </Nav>
      <CarWidget/>
    </Container>
  </Navbar>
);

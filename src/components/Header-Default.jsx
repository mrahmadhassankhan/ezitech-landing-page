import "../css/Header-Default.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const HeaderDefault = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="header-container">
        <div className="logo-website">
          <img src="/static/Images/EZITECH-LOGO-white.png" alt="logo" />
        </div>
        <div className="header-menu">
          <ul>
            <li>
              <a href="https://ezitech.org/">HOME</a>
            </li>
            <li>
              <a href="https://ezitech.org/about-ezitech/">ABOUT US</a>
            </li>
            <li>
              <a href="https://ezitech.org/certifications/">CERTIFICATIONS</a>
            </li>
            <li>
              <a href="http://ezitech.org/internship-program/">INTERNSHIPS</a>
            </li>
            <li>
              <a href="https://ezitech.org/seminars/">SEMINARS</a>
            </li>
            <li>
              <a href="http://ezitech.org/iportal/">INTERN PORTAL</a>
            </li>
          </ul>
        </div>

        <div className="search-with-heart">
          <ul>
            <span className="vertical_divider_header"></span>
            <li className="heart-icon-header">
              <a href="https://ezitech.org/user-account/">
                <FontAwesomeIcon icon={faHeart} color="white" />
              </a>
            </li>
            <li className="search-header">
              <a href="">
                <FontAwesomeIcon icon={faSearch} color="white" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-expanded">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <img
              src="/static/Images/EZITECH-LOGO-.jpg"
              alt=""
              width={170}
              height={60}
            />
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "300px" }}
                navbarScroll
              >
                <Nav.Link href="https://ezitech.org/">HOME</Nav.Link>
                <Nav.Link href="https://ezitech.org/about-ezitech/">
                  ABOUT US
                </Nav.Link>
                <Nav.Link href="https://ezitech.org/certifications/">
                  CERTIFICATIONS
                </Nav.Link>
                <Nav.Link href="http://ezitech.org/internship-program/">
                  INTERNSHIPS
                </Nav.Link>
                <Nav.Link href="https://ezitech.org/seminars/">
                  SEMINARS
                </Nav.Link>
                <Nav.Link href="http://ezitech.org/iportal/">
                  INTERN PORTAL
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
export default HeaderDefault;

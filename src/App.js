
import "./App.css"
import react from "react"
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./Component/Screens/Home";
import { useState } from "react";
import About from "./Component/Screens/About";
import Appointment from "./Component/Screens/Appointment";
import Specialist from "./Component/Screens/Specialist";
import Contactus from "./Component/Screens/Contactus";
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";





const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
 
  const [showDropdown, setShowDropdown] = useState(false);

  
  return (
    <div >

      <BrowserRouter>
        <Navbar data-aos="fade-down" expand="lg" bg="" variant="btn-primary " className="sticky-top sm-12-block navy">
          <Container>
          <img className="los text-start mb-5" src="./images/logo.png" alt=""  width={"10%"} height={'10%'}/>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home" className="two">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="two">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/Specialist" className="two">
                  Specialist
                </Nav.Link>
                <Nav.Link as={Link} to="/Appointment" className="two" >
                  Appointment
                </Nav.Link>
                <Nav.Link as={Link} to="/Contactus" className="two" >
                  ContactUs
                </Nav.Link>
                
                <Dropdown
                className="pink "
                  onMouseLeave={() => setShowDropdown(false)}
                  onMouseOver={() => setShowDropdown(true)}
                  style={{ width: '166px' }}
                >
                  <Dropdown.Toggle
                    className="pink "
                    id="dropdown-basic"
                  >
                    See Specialist
                  </Dropdown.Toggle>

                  <Dropdown.Menu show={showDropdown}>
                    <Dropdown.Item className="pink " href="./Specialist">
                      Specialist
                    </Dropdown.Item>
                    <Dropdown.Item className="pink " href="./about">
                      About
                    </Dropdown.Item>
                    <Dropdown.Item  className="pink text-center" href="contactus">
                      ContactUs
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route element={<Navigate to="/home" />} path="*" />
          <Route element={<Home />} path="/home" />
          <Route element={<About />} path="/about" />
          <Route element={<Specialist />} path="/Specialist" />
          <Route element={<Appointment />} path="/Appointment" />
          <Route element={<Contactus />} path="/Contactus" />
        </Routes>

      </BrowserRouter>

    </div>
    );
};

export default App;
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);

    // Membersihkan event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "bg-color-active" : ""}>
        <Container>
          <Navbar.Brand href="#" className="logo fw-bold mr-auto">UMKM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* text center akan diuban nanti */}
            <Nav className="mx-auto text-center">
              {NavLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>{link.text}</NavLink>
                </div>
              ))}
            </Nav>
            <div>
              <Button variant="outline-info">Join Us</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

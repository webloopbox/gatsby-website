import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";

const NavigationBar = ({ location }) => {
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = location && location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="site-header">
      <Navbar
        expand="xl"
        className={`${scrolled || !isHomePage ? "shrinked" : ""}`}
      >
        <Container className="p-0">
          <div className="col-2">
            <Link to="/" className="navbar-brand  p-0">
              Logo
            </Link>
          </div>
          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="col-9 ml-auto py-2 mt-4 mt-xl-0 py-lg-0">
              <Nav.Item className="nav-item active">
                <Link to="/#" className="nav-link p-0">
                  Poznaj przestrzeń
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item ms-xl-5">
                <Link to="/#" className="nav-link p-0">
                  Oferta
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item ms-xl-5">
                <Link to="/#" className="nav-link p-0">
                  Lokalizacja
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item ms-xl-5">
                <Link to="/#" className="nav-link p-0">
                  Własne biuro
                </Link>
              </Nav.Item>
              <Nav.Item className="nav-item ms-xl-5">
                <Link to="/#" className="nav-link p-0">
                  Kontakt
                </Link>
              </Nav.Item>
            </Nav>
            <div className="col d-flex ps-lg-0 my-2  justify-content-xl-end social-links">
              <a
                className="social-link"
                target="_blank"
                href="https://facebook.com"
              >
                <GrFacebookOption />
              </a>
              <a
                className="social-link"
                target="_blank"
                href="https://instagram.com"
              >
                <GrInstagram />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavigationBar;

import { Link } from "gatsby";
import React from "react";
import DesignerBrandIcon from "../../assets/designer-brand.svg";
import StrokesIcon from "../../assets/strokes2.svg";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container className="g-0 footer-wrapper-inner">
        <div className="d-flex flex-column flex-sm-row justify-content-sm-between">
          <div className="d-flex flex-column">
            <Link to="/" className="navbar-brand  p-0">
              Logo
            </Link>
            <div className="d-flex flex-column">
              <span className="pb-1">ul. Towarowa 5/6</span>
              <span>31-000 Kraków</span>
            </div>
            <div className="d-flex flex-column mt-4">
              <strong className="pb-1">+48 999 999 999</strong>
              <Link to="/#">
                <strong>email@email.com</strong>
              </Link>
            </div>

            <Link to="/#" className="privacy-policy">
              Polityka prywatności
            </Link>
          </div>

          <ul
            className="d-flex 
          flex-column list-unstyled"
          >
            <li>
              <Link to="/#">Strona główna</Link>
            </li>
            <li className="mt-4">
              <Link to="/#">Poznaj przestrzeń</Link>
            </li>
            <li className="mt-4">
              <Link to="/#">Oferta</Link>
            </li>
          </ul>

          <ul
            className="d-flex
          flex-column list-unstyled"
          >
            <li>
              <Link to="/#">Lokalizacja</Link>
            </li>
            <li className="mt-4">
              <Link to="/#">Własne biuro</Link>
            </li>
            <li className="mt-4">
              <Link to="/#">Kontakt</Link>
            </li>
          </ul>

          <div className="d-flex align-items-end mt-2 mt-sm-0">
            <div className="d-flex align-items-end">
              <span className="me-2 site-author">Proudly designed by</span>
              <DesignerBrandIcon />
            </div>
          </div>
        </div>
      </Container>
      <StrokesIcon className="shapes-icon" />
    </div>
  );
};

export default Footer;

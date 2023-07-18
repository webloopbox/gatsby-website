import React from "react";
import { Container } from "react-bootstrap";
import Img from "gatsby-image";
import { Link } from "gatsby";
import RightArrow from "../../assets/arrow-right.svg";
import overlay from "../../assets/slider-overlay.png";

const Services = ({
  data: { serviceImg1, serviceImg2, serviceImg3, serviceImg4 },
}) => {
  return (
    <Container className="g-0 services-wrapper">
      <Link to="/#" className="service service-1">
        <Img fluid={serviceImg1.childImageSharp.fluid} objectFit="cover" />
        <img src={overlay} className="overlay" />
        <div className="service-content">
          <div className="service-description">
            <h2>
              <span>Biuro</span>
            </h2>
            <span className="divider"></span>
            <p>od 1000 zł/msc</p>
          </div>
        </div>
        <span className="enter-arrow">
          <RightArrow />
        </span>
      </Link>

      <Link to="/#" className="service service-2">
        <Img fluid={serviceImg2.childImageSharp.fluid} objectFit="cover" />
        <img src={overlay} className="overlay" />
        <div className="service-content">
          <div className="service-description">
            <h2>
              <span>
                Lorem
                <br />
                ipsum
              </span>
            </h2>
            <span className="divider"></span>
            <p>od 500 zł/msc</p>
          </div>
        </div>
        <span className="enter-arrow">
          <RightArrow />
        </span>
      </Link>

      <Link to="/#" className="service service-3">
        <Img fluid={serviceImg3.childImageSharp.fluid} objectFit="cover" />
        <img src={overlay} className="overlay" />
        <div className="service-content">
          <div className="service-description">
            <h2>
              <span>
                Biuro
                <br />
                lorem
              </span>
            </h2>
            <span className="divider"></span>
            <p>od 100 zł/msc</p>
          </div>
        </div>
        <span className="enter-arrow">
          <RightArrow />
        </span>
      </Link>

      <Link to="/#" className="service service-4">
        <Img fluid={serviceImg4.childImageSharp.fluid} objectFit="cover" />
        <img src={overlay} className="overlay" />
        <div className="service-content">
          <div className="service-description">
            <h2>
              <span>
                Biuro lorem ipsum <br />
                Lorem
              </span>
            </h2>
            <span className="divider"></span>
            <p>od 100 zł/msc</p>
          </div>
        </div>
        <span className="enter-arrow">
          <RightArrow />
        </span>
      </Link>
    </Container>
  );
};

export default Services;

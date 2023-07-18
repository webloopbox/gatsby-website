import React from "react";
import Img from "gatsby-image";
import { Container } from "react-bootstrap";
import StrokesShape from "../../assets/strokes1.svg";

const ImageSection = ({ data }) => {
  return (
    <div className="img-section-wrapper">
      <StrokesShape className="strokes-shape" />
      <div className="img-section-wrapper-bg">
        <Img fluid={data.image1.childImageSharp.fluid} objectFit="cover" />
      </div>
      <Container className="g-0 img-section-wrapper-content">
        <h4>
          Lorem ipsum <br />
          vs własne biuro
        </h4>
      </Container>
      <div className="divider-wrapper">
        <span className="divider"></span>
      </div>
    </div>
  );
};

export default ImageSection;

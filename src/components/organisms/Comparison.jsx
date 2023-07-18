import React from "react";
import Img from "gatsby-image";
import { Container } from "react-bootstrap";
import StrokesShape from "../../assets/strokes1.svg";

const Comparison = ({ data }) => {
  return (
    <div className="comparision-wrapper">
      <StrokesShape className="strokes-shape" />
      <div className="comparision-wrapper-image">
        <Img fluid={data.image1.childImageSharp.fluid} objectFit="cover" />
      </div>
      <Container className="g-0 comparision-wrapper-content">
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

export default Comparison;

import { Link } from "gatsby";
import React from "react";
import { Container } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const PostSection = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "placeholder_img.png" }) {
        publicURL
      }
    }
  `);

  return (
    <Container className="g-0 posts-wrapper">
      <h1 className="text-center">Aktualności</h1>
      <div className="posts">
        <div className="single-post">
          <Img
            alt="Your image"
            fluid={{
              src: data.placeholderImage.publicURL,
            }}
            objectFit="cover"
          />
          <div className="post-description">
            <span className="post-date">01.01.2021</span>
            <h2 className="g-0 post-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <Link to="/#">Więcej</Link>
          </div>
        </div>

        <div className="single-post">
          <Img
            alt="Your image"
            fluid={{
              src: data.placeholderImage.publicURL,
            }}
            objectFit="cover"
          />
          <div className="post-description">
            <span className="post-date">01.01.2021</span>
            <h2 className="g-0 post-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <Link to="/#">Więcej</Link>
          </div>
        </div>

        <div className="single-post">
          <Img
            alt="Your image"
            fluid={{
              src: data.placeholderImage.publicURL,
            }}
            objectFit="cover"
          />
          <div className="post-description">
            <span className="post-date">01.01.2021</span>
            <h2 className="g-0 post-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <Link to="/#">Więcej</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PostSection;

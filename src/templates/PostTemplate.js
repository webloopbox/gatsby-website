import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import { Container, Button } from "react-bootstrap";
import Img from "gatsby-image";
import { format } from "date-fns";
import LeftArrow from "../assets/arrow-left.svg";

const PostTemplate = ({ data }) => {
  return (
    <Layout>
      <Container className="post-details-wrapper">
        <Link to="/" className="p-0 back-btn text-decoration-none">
          <span>
            <LeftArrow />
          </span>
          <span>Powrót</span>
        </Link>
        <div>
          <Img
            alt="Post thumbnail"
            fluid={
              data.wpPost.featuredImage.node.localFile.childImageSharp.fluid
            }
            objectFit="cover"
          />
          <div className="d-flex flex-column flex-column-reverse flex-sm-row align-items-start align-items-sm-center justify-content-between mt-2">
            <h2 className="my-3 post-title me-3">{data.wpPost.title}</h2>
            <span>{format(new Date(data.wpPost.date), "dd.MM.yyyy")}</span>
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
            className="mt-5"
          />
        </div>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query currentPostQuery($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      date
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid(maxWidth: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default PostTemplate;

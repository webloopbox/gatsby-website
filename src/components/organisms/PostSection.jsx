import { Link } from "gatsby";
import React from "react";
import { Container } from "react-bootstrap";
import { format } from "date-fns";
import Img from "gatsby-image";

const PostSection = ({ data }) => {
  return (
    <Container className="g-0 posts-wrapper">
      <h1 className="text-center">Aktualności</h1>
      <div className="posts">
        {data.allWpPost.nodes.map((post, index) => {
          console.log(post);
          const formattedDate = format(new Date(post.date), "dd.MM.yyyy");
          return (
            <div className="single-post" key={index}>
              <Img
                alt="Post thumbnail"
                fluid={post.featuredImage.node.localFile.childImageSharp.fluid}
                objectFit="cover"
              />
              <div className="post-description">
                <span className="post-date">{formattedDate}</span>
                <h2 className="g-0 post-title">{post.title}</h2>
                <Link to={`/posts/${post.slug}`}>Więcej</Link>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default PostSection;

import React from "react";
import PropTypes from "prop-types";

const PageJumbotron = ({ title, image, description }) => {
  return (
    <div className="container">
      <div
        className="full-width-image-container-margin-top-0"
        style={{
          backgroundImage: `url('/img/blog-index.jpg')`
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            color: "white",
            padding: "1rem"
          }}
        >
          {title}
        </h1>
        <hr className="hr-jumbotron" />
        <h3>{description}</h3>
      </div>
    </div>
  );
};

PageJumbotron.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default PageJumbotron;

import React from "react";
import PropTypes from "prop-types";

const PageJumbotron = ({ title, image, description }) => {
  const inputImage = image ? image : `url('/img/blog-index.jpg')`;
  return (
    <div>
      <div
        className="full-width-image-container-margin-top-0"
        style={{
          backgroundImage: inputImage
        }}
      >
        <div className="black-overlay-opacity-50">
          <div className="jumbotron-centered-elements">
            <h1 className="h1-page-title">{title.toUpperCase()}</h1>
            <hr className="hr-jumbotron" />
            <h3 className="h3-page-subtitle">{description}</h3>
          </div>
        </div>
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

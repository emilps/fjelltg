import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const PageJumbotron = ({ title, image, description }) => {
  const inputImage = image !== '' ? image : `/img/blog-index.jpg`;

  return (
    <div>
      <div className="index-image-container margin-top-0">
        {typeof inputImage === 'string' ? (
          <img
            src={inputImage}
            className="index-full-width-image margin-top-0"
            style={{ maxWidth: '100%' }}
          />
        ) : (
          <div>
            {inputImage ? (
              <PreviewCompatibleImage
                imageInfo={{
                  image: inputImage,
                  alt: `featured image thumbnail for project ${title}`,
                  classNames: 'index-full-width-image margin-top-0',
                }}
              />
            ) : null}
          </div>
        )}
        <div className="black-overlay-opacity-50">
          <div className="jumbotron-centered-elements">
            <h1 className="h1-page-title has-text-centered is-size-3-mobile">
              {title && title.toUpperCase()}
            </h1>
            <hr className="hr-jumbotron" />
            <h3 className="h3-page-subtitle is-size-5-mobile">{description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

PageJumbotron.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default PageJumbotron;

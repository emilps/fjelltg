import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PreviewCompatibleImage = ({ imageInfo }) => {
  const [isIE, setIsIE] = useState(false);

  useEffect(() => {
    setIsIE(/*@cc_on!@*/ false || !!document.documentMode);
  }, []);

  const {
    alt = '',
    childImageSharp,
    image,
    style,
    ignoreIE,
    classNames,
  } = imageInfo;

  if (!!image && !!image.childImageSharp && !ignoreIE && isIE) {
    console.log('IE version');

    return (
      <div
        className={'compat-object-fit ' + classNames}
        style={{
          backgroundImage: 'url(' + image.childImageSharp.fluid.src + ')',
          ...style,
        }}
      ></div>
    );
  }

  if (!!image && !!image.childImageSharp) {
    //console.log(image.childImageSharp.fluid.src);
    return (
      <Img
        style={style}
        className={classNames}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (childImageSharp) {
    return (
      <Img
        style={style}
        className={classNames}
        fluid={childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!image && typeof image === 'string' && !ignoreIE && isIE) {
    console.log('IE version');

    return (
      <div
        className={'compat-object-fit ' + classNames}
        style={{
          backgroundImage: 'url(' + image + ')',
          ...style,
        }}
      ></div>
    );
  }

  if (!!image && typeof image === 'string')
    return <img style={style} className={classNames} src={image} alt={alt} />;

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
    ignoreIE: PropTypes.bool,
    classNames: PropTypes.string,
  }).isRequired,
};

export default PreviewCompatibleImage;

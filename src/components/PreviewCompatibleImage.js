import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PreviewCompatibleImage = ({ imageInfo }) => {
  const [isIE, setIsIE] = useState(true);

  useEffect(() => {
    setIsIE(/*@cc_on!@*/ false || !!document.documentMode);
  }, []);

  const { alt = '', childImageSharp, image, style, ignoreIE } = imageInfo;
  /*
  if (!!image && !!image.childImageSharp) {
    console.log(image.childImageSharp.fluid.src);
    return (
      <div className="ie-card ie-horizontal">
        <img src={image.childImageSharp.fluid.src} />
      </div>
    );
  }*/

  console.log(!ignoreIE);

  if (!!image && !!image.childImageSharp && !ignoreIE && isIE) {
    //console.log(image.childImageSharp.fluid.src);
    //console.log(style);

    return (
      <div
        className="compat-object-fit"
        style={{
          backgroundImage: 'url(' + image.childImageSharp.fluid.src + ')',
          ...style,
        }}
      ></div>
    );
  }

  if (!!image && !!image.childImageSharp) {
    console.log(image.childImageSharp.fluid.src);
    return <Img style={style} fluid={image.childImageSharp.fluid} alt={alt} />;
  }

  if (childImageSharp) {
    return <Img style={style} fluid={childImageSharp.fluid} alt={alt} />;
  }

  if (!!image && typeof image === 'string')
    return <img style={style} src={image} alt={alt} />;

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
    ignoreIE: PropTypes.bool,
  }).isRequired,
};

export default PreviewCompatibleImage;

import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline is-centered">
    {gridItems &&
      gridItems.map((item, index) => (
        <div
          key={index}
          className="column is-one-fifth-desktop is-one-third-tablet remove-padding"
        >
          {(item.ignoreIE = true)}
          <a href={item.link} className="partner-logo">
            <PreviewCompatibleImage imageInfo={item} />
          </a>
        </div>
      ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;

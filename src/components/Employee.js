import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';

export const Employee = ({
  name,
  position,
  picture,
  phoneNumber,
  email,
  linkedIn,
  index
}) => {
  return (
    <div className="employeeContainer">
      <div className="employeePicture">
        {picture ? (
          <div
            className={`${index % 2 == 0 ? 'black-overlay' : 'blue-overlay'}`}
          >
            <PreviewCompatibleImage
              imageInfo={{
                image: picture,
                alt: `featured image thumbnail for post ${name}`,
                imageStyle: { height: '270px', width: '100%', zIndex: '-1' }
              }}
            />
          </div>
        ) : null}
      </div>
      <div className="employeeInfo">
        <hr
          className="has-text-centered"
          style={{
            backgroundColor: '#002060',
            width: '60%',
            height: '1px',
            padding: '1px',
            margin: '20px 0 10px 0'
          }}
        ></hr>
        <p className="has-text-centered has-text-weight-bold">{name}</p>
        <p className="has-text-centered has-text-weight-light">{position}</p>
        <p className="has-text-centered has-text-weight-light">{email}</p>
        <p className="has-text-centered has-text-weight-light">{phoneNumber}</p>
        <p className="has-text-centered has-text-weight-light">{linkedIn}</p>
      </div>
    </div>
  );
};

Employee.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  picture: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  phoneNumber: PropTypes.number,
  email: PropTypes.string,
  linkedIn: PropTypes.string
};

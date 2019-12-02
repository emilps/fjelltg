import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export const Employee = ({
  name,
  position,
  picture,
  phoneNumber,
  email,
  linkedIn
}) => {
  return (
    <div className="employeeContainer">
      <div className="employeePicture">
        {picture ? (
          <div className="featured-thumbnail">
            <PreviewCompatibleImage
              imageInfo={{
                image: picture,
                alt: `featured image thumbnail for post ${name}`
              }}
            />
          </div>
        ) : null}
        }
      </div>
      <h3>{name}</h3>
      <h4>{position}</h4>
      <h4>{phoneNumber}</h4>
      <h4>{email}</h4>
      <h4>{linkedIn}</h4>
    </div>
  );
};

Employee.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  picture: PropTypes.string,
  phoneNumber: PropTypes.number,
  email: PropTypes.string,
  linkedIn: PropTypes.string
};

import React from "react";
import PropTypes from "prop-types";
import { EmployeeTemplate } from "../../templates/employee";

const EmployeePreview = ({ entry }) => (
  <EmployeeTemplate
    position={entry.getIn(["data", "position"])}
    name={entry.getIn(["data", "name"])}
    picture={entry.getIn(["data", "picture"])}
    phoneNumber={entry.getIn(["data", "phonenumber"])}
    email={entry.getIn(["data", "email"])}
    linkedIn={entry.getIn(["data", "linkedin"])}
  />
);

EmployeePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default EmployeePreview;

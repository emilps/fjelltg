import React from 'react';
import PropTypes from 'prop-types';
import { ContactPageTemplate } from '../../templates/contact-page';

const ContactPagePreview = ({ entry, widgetFor }) => (
  <ContactPageTemplate
    headertitle={entry.getIn(['data', 'headertitle'])}
    headerbyline={entry.getIn(['data', 'headerbyline'])}
    headerimage={entry.getIn(['data', 'headerimage'])}
    formtitle={entry.getIn(['data', 'formtitle'])}
    employeetitle={entry.getIn(['data', 'employeetitle'])}
  />
);

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ContactPagePreview;

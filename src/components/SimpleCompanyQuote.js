import React from 'react';
import PropTypes from 'prop-types';

const SimpleCompanyQuote = ({ text, isMainQuote }) => {
  return (
    <section className="section is-medium">
      <div className="container">
        <div className="content">
          <p
            className={`has-text-centered ${
              isMainQuote ? 'title' : 'is-size-4'
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

SimpleCompanyQuote.propTypes = {
  text: PropTypes.string,
  isMainQuote: PropTypes.bool
};

export default SimpleCompanyQuote;

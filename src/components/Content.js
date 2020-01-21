import React from 'react';
import PropTypes from 'prop-types';
import './all.sass';

export const HTMLContent = ({ content, className }) => {
  const regex = /{"widget":"imageblock","text":"(.+)","image":"(.+)"}/g;
  const found = content.match(regex);

  let newContent = content;

  found.forEach(element => {
    newContent = newContent.replace(
      element,
      TestComp(JSON.parse(element).text, JSON.parse(element).image)
    );
  });

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: newContent }}
    />
  );
};

const TestComp = (text, image) =>
  `
  <div class="columns image-text-block" >
    <p class="column is-half image-text-block-text">
      ${text}
    </p>
    <img class="column is-half remove-padding image-text-block-image" src="${image}" style="object-fit: cover;" />
  </div>
  `;

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;

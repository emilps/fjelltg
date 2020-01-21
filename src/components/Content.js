import React from 'react';
import PropTypes from 'prop-types';
import './all.sass';

export const HTMLContent = ({ content, className }) => {
  const regexp = RegExp(
    /{"widget":"imageblock","text":"(.+)","image":"(.+)"}/,
    'g'
  );
  let newContent = content;

  if (typeof content === 'string') {
    const founds = content.matchAll(regexp) || [];

    newContent = content;
    let clusteredBool = false;
    let findingsList = [];
    let clusteredString = '';

    for (const found of founds) {
      findingsList.push(found);
    }

    for (let index = 0; index < findingsList.length; index++) {
      const element = findingsList[index];

      if (index < findingsList.length - 1) {
        if (
          findingsList[index + 1].index - (element.index + element[0].length) <
          9
        ) {
          if (clusteredBool) {
            clusteredString = 'clustered-bottom clustered-top';
          } else {
            clusteredString = 'clustered-top';
          }
          clusteredBool = true;
        } else {
          if (clusteredBool) {
            clusteredString = 'clustered-bottom';
          } else {
            clusteredString = '';
          }
          clusteredBool = false;
        }
      }
      newContent = newContent.replace(
        element[0],
        TestComp(
          JSON.parse(element[0]).text,
          JSON.parse(element[0]).image,
          index % 2 == 1,
          clusteredString
        )
      );
    }
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: newContent }}
    />
  );
};

const TestComp = (text, image, reversed, clustered) =>
  `
  <div class="columns image-text-block ${
    reversed ? 'row-reversed' : ''
  } ${clustered}" >
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

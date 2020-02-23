import React, { useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const IndexImage = indexblock => {
  const [chosenTab, setChosenTab] = useState(1);
  const [title, setTitle] = useState(indexblock.indexblock.title1);
  const [link, setLink] = useState(indexblock.indexblock.link1);

  React.useEffect(() => {
    const next = (chosenTab + 1) % 2;
    const id = setTimeout(() => handleClick(next), 5000);
    return () => clearTimeout(id);
  }, [chosenTab]);

  const handleClick = index => {
    setChosenTab(index);
    if (index === 1) {
      setTitle(indexblock.indexblock.title1);
      setLink(indexblock.indexblock.link1);
    } else {
      setTitle(indexblock.indexblock.title2);
      setLink(indexblock.indexblock.link2);
    }
  };

  return (
    <div className="index-image-container margin-top-0">
      {typeof indexblock.indexblock.image1 === 'string' ? (
        <img
          src={indexblock.indexblock.image1}
          className="index-full-width-image margin-top-0"
          style={{ maxWidth: '100%' }}
        />
      ) : (
        <div>
          {indexblock.indexblock.image1 ? (
            <Img
              fluid={indexblock.indexblock.image1.childImageSharp.fluid}
              alt={indexblock.indexblock.title1}
              className="index-full-width-image margin-top-0"
            />
          ) : null}
        </div>
      )}
      {typeof indexblock.indexblock.image2 === 'string' ? (
        <img
          src={indexblock.indexblock.image1}
          className={`index-full-width-image image-overlay margin-top-0 ${
            chosenTab == 1 ? 'recycle-active' : 'water-active'
          }`}
          style={{ maxWidth: '100%' }}
        />
      ) : (
        <div className="image-overlay index-full-width-image margin-top-0">
          {indexblock.indexblock.image2 ? (
            <Img
              fluid={indexblock.indexblock.image2.childImageSharp.fluid}
              alt={indexblock.indexblock.title2}
              className={`index-full-width-image image-overlay margin-top-0 ${
                chosenTab == 1 ? 'recycle-active' : 'water-active'
              }`}
            />
          ) : null}
        </div>
      )}

      <div className="index-image-text-field">
        <div className="index-image-title-container">
          <div
            className={`is-size-2 has-text-weight-bold index-image-title is-size-4-mobile has-text-centered ${
              chosenTab == 1 ? 'water-active' : 'recycle-active'
            }`}
          >
            {title}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="button learn-button has-text-weight-bold"
          >
            <div className="has-text-weight-bold">See Solution</div>
          </a>
        </div>
        <div className="index-image-tabs">
          <div
            className={`index-image-tab index-image-tab-left ${
              chosenTab == 0 ? 'is-active' : ''
            }
          `}
            onClick={() => handleClick(1)}
          >
            {indexblock.indexblock.title1}
          </div>

          <div
            className={`index-image-tab index-image-tab-right ${
              chosenTab == 1 ? 'is-active' : ''
            }
          `}
            onClick={() => handleClick(0)}
          >
            {indexblock.indexblock.title2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexImage;

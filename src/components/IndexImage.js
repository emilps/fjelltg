import React, { useState } from 'react';
import { Link } from 'gatsby';

const IndexImage = () => {
  const [chosenTab, setChosenTab] = useState(1);
  const [title, setTitle] = useState('Waste Water');
  const [link, setLink] = useState('/project/2019-12-08-new-project/');
  const [imageURL, setImageURL] = useState('blog-index.jpg');

  const handleClick = index => {
    setChosenTab(index);
    if (index === 1) {
      setTitle('Waste Water');
      setLink('/project/2019-12-08-new-project/');
      setImageURL('blog-index.jpg');
    } else {
      setTitle('Protein Recycling');
      setLink('/project/2019-12-09-fourth-project/');
      setImageURL('jumbotron.jpg');
    }
  };

  return (
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(/img/${imageURL})`,
        backgroundPosition: `top`
      }}
    >
      <div className="index-image-text-field">
        <div className="index-image-title-container">
          <div className="is-size-2 has-text-weight-bold index-image-title">
            {title}
          </div>
          <Link to={link} className="button learn-button has-text-weight-bold">
            <div>Learn more</div>
          </Link>
        </div>
        <div className="index-image-tabs">
          <div
            className={`index-image-tab index-image-tab-left ${
              chosenTab == 0 ? 'is-active' : ''
            }
          `}
            onClick={() => handleClick(1)}
          >
            Waste Water
          </div>

          <div
            className={`index-image-tab index-image-tab-right ${
              chosenTab == 1 ? 'is-active' : ''
            }
          `}
            onClick={() => handleClick(0)}
          >
            Protein Recycling
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexImage;

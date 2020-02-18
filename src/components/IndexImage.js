import React, { useState } from 'react';
import { Link } from 'gatsby';

const IndexImage = () => {
  const [chosenTab, setChosenTab] = useState(1);
  const [title, setTitle] = useState('Waste Water');
  const [link, setLink] = useState('/project/2019-12-08-new-project/');

  React.useEffect(() => {
    const next = (chosenTab + 1) % 2;
    const id = setTimeout(() => handleClick(next), 5000);
    return () => clearTimeout(id);
  }, [chosenTab]);

  const handleClick = index => {
    setChosenTab(index);
    if (index === 1) {
      setTitle('Waste Water');
      setLink('/project/2019-12-08-new-project/');
    } else {
      setTitle('Protein Recycling');
      setLink('/project/2019-12-09-fourth-project/');
    }
  };

  return (
    <div className="index-image-container margin-top-0">
      <img
        src="/img/FRS-plant-2.png"
        alt="Waste water"
        className="index-full-width-image margin-top-0"
      />
      <img
        src="/img/protein-recycling_1920.jpg"
        alt="Protein Recycling"
        className={`index-full-width-image image-overlay margin-top-0 ${
          chosenTab == 1 ? 'recycle-active' : 'water-active'
        }`}
      />
      <div className="index-image-text-field">
        <div className="index-image-title-container">
          <div
            className={`is-size-2 has-text-weight-bold index-image-title is-size-4-mobile has-text-centered ${
              chosenTab == 1 ? 'water-active' : 'recycle-active'
            }`}
          >
            {title}
          </div>
          <Link to={link} className="button learn-button has-text-weight-bold">
            <div className="has-text-weight-bold">See Solution</div>
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

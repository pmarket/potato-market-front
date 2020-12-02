import React, { useState } from 'react';
import './Place.css';

const Place = () => {
  const [place, setPlace] = useState('');

  const handleOnClickPlace = (e) => {
    setPlace(e.target.value);
  };

  return (
    <div className="place-container">
      <div className="pradiocontainer">
        <label className="placelabel">
          <input
            type="radio"
            value="main"
            onClick={handleOnClickPlace}
            checked={place === 'main'}
          />
          본관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            value="graduate"
            onClick={handleOnClickPlace}
            checked={place === 'graduate'}
          />
          대학원관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            value="student"
            onClick={handleOnClickPlace}
            checked={place === 'student'}
          />
          학생회관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            value="science"
            onClick={handleOnClickPlace}
            checked={place === 'science'}
          />
          이공관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            value="vision"
            onClick={handleOnClickPlace}
            checked={place === 'vision'}
          />
          비전관
        </label>
      </div>
      <div className="pradiocontainer">
        <label className="placelabel">
          <input
            type="radio"
            value="design"
            onClick={handleOnClickPlace}
            checked={place === 'design'}
          />
          디자인관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            value="music"
            onClick={handleOnClickPlace}
            checked={place === 'music'}
          />
          음악관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            value="lodem"
            onClick={handleOnClickPlace}
            checked={place === 'lodem'}
          />
          로뎀관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            value="yongbi"
            onClick={handleOnClickPlace}
            checked={place === 'yongbi'}
          />
          영산비전센터
        </label>
        <label className="placelabel">
          <input
            type="radio"
            value="theology"
            onClick={handleOnClickPlace}
            checked={place === 'theology'}
          />
          신학관
        </label>
      </div>
    </div>
  );
};

export default Place;

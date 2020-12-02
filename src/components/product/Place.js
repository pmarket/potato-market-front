import React from 'react';
import './Place.css';

const Place = ({ handleOnClickPlace }) => {
  return (
    <div className="place-container">
      <div className="pradiocontainer">
        <label className="placelabel">
          <input
            type="radio"
            value="main"
            name="places"
            onChange={handleOnClickPlace}
          />
          본관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="graduate"
            onChange={handleOnClickPlace}
          />
          대학원관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            value="student"
            name="places"
            onChange={handleOnClickPlace}
          />
          학생회관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="science"
            onChange={handleOnClickPlace}
          />
          이공관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="vision"
            onChange={handleOnClickPlace}
          />
          비전관
        </label>
      </div>
      <div className="pradiocontainer">
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="design"
            onChange={handleOnClickPlace}
          />
          디자인관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="music"
            onChange={handleOnClickPlace}
          />
          음악관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="lodem"
            onChange={handleOnClickPlace}
          />
          로뎀관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="yongbi"
            onChange={handleOnClickPlace}
          />
          영산비전센터
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="theology"
            onChange={handleOnClickPlace}
          />
          신학관
        </label>
      </div>
    </div>
  );
};

export default Place;

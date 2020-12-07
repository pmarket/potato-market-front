import React from 'react';
import 'components/registerProduct/Place.css';

const Place = ({ handleOnClickPlace }) => {
  return (
    <div className="place-container">
      <div className="pradiocontainer">
        <label className="placelabel">
          <input
            type="radio"
            value="본관"
            name="places"
            onChange={handleOnClickPlace}
          />
          본관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="대학원관"
            onChange={handleOnClickPlace}
          />
          대학원관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            value="학생회관"
            name="places"
            onChange={handleOnClickPlace}
          />
          학생회관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="이공관"
            onChange={handleOnClickPlace}
          />
          이공관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="비전관"
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
            value="디자인관"
            onChange={handleOnClickPlace}
          />
          디자인관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="음악관"
            onChange={handleOnClickPlace}
          />
          음악관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="로뎀관"
            onChange={handleOnClickPlace}
          />
          로뎀관
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="영산비전센터"
            onChange={handleOnClickPlace}
          />
          영산비전센터
        </label>
        <label className="placelabel">
          <input
            type="radio"
            name="places"
            value="신학관"
            onChange={handleOnClickPlace}
          />
          신학관
        </label>
      </div>
    </div>
  );
};

export default Place;

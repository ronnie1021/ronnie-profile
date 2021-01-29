import React from 'react';
import PropTypes from 'prop-types';
import Fact from './Fact';

const FunFacts = ({ data }) => (
  <div className="funfacts">
    <div className="link-to" id="funfacts" />
    <div className="title">
      <h3>Key Points</h3>
    </div>
    {data.map((fact) => (
      <Fact
        data={fact}
      />
    ))}
  </div>
);

FunFacts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

FunFacts.defaultProps = {
  data: [],
};

export default FunFacts;

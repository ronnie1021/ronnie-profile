import React from 'react';
import PropTypes from 'prop-types';

const Fact = ({ data }) => (
  <article className="facts-container">
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Fact.propTypes = {
  data: PropTypes.shape({
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Fact;

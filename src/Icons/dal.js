import React from 'react';
import PropTypes from 'prop-types';

const DAL = props => {
  const { size } = props;
  return (
    <svg
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid slice"
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.41421"
      viewBox="0 0 560 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fillRule="nonzero"
        transform="matrix(.628872 0 0 .628872 144.164 70.8008)"
      >
        <path
          d="m216 1.282 132.674 408.328-347.344-252.36h429.34l-347.344 252.36z"
          fill="#024"
        />
        <path
          d="m216 38.987 110.511 340.119-289.322-210.205h357.622l-289.322 210.205z"
          fill="#fff"
        />
        <path
          d="m216 68.272 93.298 287.142-244.257-177.464h301.918l-244.257 177.464z"
          fill="#024"
        />
      </g>
    </svg>
  );
};

DAL.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DAL.defaultProps = {
  size: '100'
};

export default DAL;

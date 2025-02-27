import React from 'react';
import PropTypes from 'prop-types';

const Play = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <path d="M6 4v16"></path>
      <path d="M20 12L6 20"></path>
      <path d="M20 12L6 4"></path>
    </svg>
  );
};

Play.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Play.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Play;

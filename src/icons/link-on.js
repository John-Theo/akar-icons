import React from 'react';
import PropTypes from 'prop-types';

const LinkOn = props => {
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
      id="LinkOn"
    >
      <path d="M9 12h6"></path>
      <path d="M15 6h1a6 6 0 010 12h-1"></path>
      <path d="M9 18H8A6 6 0 018 6h1"></path>
    </svg>
  );
};

LinkOn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LinkOn.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default LinkOn;

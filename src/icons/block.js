import React from 'react';
import PropTypes from 'prop-types';

const Block = props => {
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
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M5 19L19 5"></path>
    </svg>
  );
};

Block.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Block.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Block;

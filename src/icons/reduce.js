import React from 'react';
import PropTypes from 'prop-types';

const Reduce = props => {
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
      id="Reduce"
    >
      <path d="M3 21l7-7M14 10l7-7M20 10h-6V4M10 20v-6H4"></path>
    </svg>
  );
};

Reduce.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Reduce.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default Reduce;

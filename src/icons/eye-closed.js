import React from 'react';
import PropTypes from 'prop-types';

const EyeClosed = props => {
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
      id="EyeClosed"
    >
      <path d="M21.124 11.309a.842.842 0 010 1.382C19.559 13.836 16.062 16 12 16s-7.559-2.164-9.124-3.309a.842.842 0 010-1.382C4.441 10.164 7.938 8 12 8s7.559 2.164 9.124 3.309z"></path>
      <path d="M12 16v3"></path>
      <path d="M19 14l2 2.5"></path>
      <path d="M16 15.5l1 3"></path>
      <path d="M7 18.5l1-3"></path>
      <path d="M5 14l-2 2.5"></path>
    </svg>
  );
};

EyeClosed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

EyeClosed.defaultProps = {
  color: 'currentColor',
  size: '24',
  display: 'block'
};

export default EyeClosed;

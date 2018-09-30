import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * Caret
 * @param {string} direction - The caret direction (top|bottom|left|right)
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} - React element tree describing the component
 */

export default function Caret({direction, classNames, ...props}) {
  return <span className={`caret caret--${direction} ${addClassNames(classNames)}`} {...props} />;
}

Caret.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
};

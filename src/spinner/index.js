import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * Spinner
 * @param {string} size - The spinner size (sm|md|lg|xl|xxl)
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Spinner({size, classNames, ...props}) {
  return <div className={`spinner spinner--${size} ${addClassNames(classNames)}`} {...props} />;
}

Spinner.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl'])
};

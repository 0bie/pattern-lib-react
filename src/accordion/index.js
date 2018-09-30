import React from 'react';
import PropTypes from 'prop-types';
import {getShape, addClassNames} from '../utils';

/**
 * Accordion
 * @param {string} id - The accordion id
 * @param {boolean} rounded - The accordion shape
 * @param {array} classNames - Additional classNames (Optional)
 * @param {array} children - The accordion sections
 * @returns {object} React element tree describing the component
 */

export default function Accordion({id, rounded, children, classNames, ...props}) {
  return (
    <div
      id={id}
      {...props}
      className={`accordion ${getShape(rounded)} ${addClassNames(classNames)}`}
    >
      {children}
    </div>
  );
}

Accordion.propTypes = {
  id: PropTypes.string,
  rounded: PropTypes.bool,
  classNames: PropTypes.array,
  children: PropTypes.arrayOf(PropTypes.element)
};

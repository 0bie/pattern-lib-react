import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * Toggle
 * @param {string} id - The toggle `id`
 * @param {string} size - The toggle size (sm|md|lg)
 * @param {boolean} checked - True if toggle is checked
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Toggle({id, size, checked, classNames, ...props}) {
  return (
    <div className={`toggle-container ${addClassNames(classNames)}`} {...props}>
      <input id={id} className={`toggle toggle--${size}`} name={id} type="checkbox" defaultChecked={checked} />
      <label htmlFor={id} />
    </div>
  );
}

Toggle.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  classNames: PropTypes.arrayOf(PropTypes.string)
};

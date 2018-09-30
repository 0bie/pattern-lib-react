import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * Radio input
 * @param {string} id - The input `id`
 * @param {string} size - The input size (sm|md|lg)
 * @param {string} label - The input label
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Radio({id, size, label, classNames, ...props}) {
  return (
    <label id={id} className={`radio-container ${addClassNames(classNames)}`} {...props}>
      <input className={`radio radio--${size} hidden`} type="radio" name={id} />
      <div><span className="radio-label">{label}</span></div>
    </label>
  );
}

Radio.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  classNames: PropTypes.arrayOf(PropTypes.string)
};

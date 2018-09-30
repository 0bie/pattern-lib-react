import React from 'react';
import PropTypes from 'prop-types';
import {getShape, addClassNames} from '../utils';

/**
 * Checkbox
 * @param {string} id - The checkbox `id`
 * @param {size} size - The checkbox size (sm|md|lg)
 * @param {string} label - The checkbox label (Optional)
 * @param {array} classNames - Additional classnames (Optional)
 * @param {boolean} rounded - The checkbox shape (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Checkbox({
  id,
  size,
  label,
  rounded,
  classNames,
  ...props
}) {
  return (
    <label id={id} className={`checkbox-container ${addClassNames(classNames)}`} {...props}>
      <input id={id} className={`checkbox checkbox--${size} ${getShape(rounded, 'checkbox')} hidden`} type="checkbox" name={id} />
      <div>
        {label && <span className="checkbox-label">{label}</span>}
      </div>
    </label>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  classNames: PropTypes.arrayOf(PropTypes.string)
};

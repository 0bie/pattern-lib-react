import React from 'react';
import PropTypes from 'prop-types';
import {getShape, addClassNames} from '../utils';
import Icon from '../icon';

/**
 * Button
 * @param {string} size - The button size (xs|sm|md|lg|xl|xxl)
 * @param {string} label - The button label
 * @param {object} icon - The button icon properties (Optional)
 * @param {string} type - The button type (button|submit|reset)
 * @param {boolean} loading - The button loading state
 * @param {string} iconPosition - The icon position (left | right) (Optional)
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Button({
  size,
  label,
  icon,
  rounded,
  loading,
  children,
  classNames,
  iconPosition,
  type = 'button',
  ...props
}) {
  const isLoading = loading ? `btn--loading btn--loading--${size}` : '';
  const btnClassNames = `btn btn--${size} ${isLoading} ${getShape(rounded, 'btn')} ${addClassNames(classNames)}`;
  return (
    <button type={type} className={btnClassNames} {...props}>
      {icon && iconPosition === 'left' ? <Icon {...icon} /> : null}
      {label ? <span className="btn-text">{label}</span>
        : loading ? <span className="text--sr">loading</span>
          : icon && !iconPosition ? <Icon {...icon} /> : null}
      {icon && iconPosition === 'right' ? <Icon {...icon} /> : null}
      {children && children}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.object,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
  classNames: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

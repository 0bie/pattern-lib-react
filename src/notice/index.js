import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import {getShape, addClassNames} from '../utils';
import {getNoticeState} from './utils';

/**
 * Render a notice message
 * @param {string} message - The notice message
 * @param {string} state - The notice state (success|error|warn)
 * @param {object} icon - Icon properties (Optional)
 * @param {string} iconPosition - The icon position (Optional)
 * @param {boolean} rounded - The notice shape
 * @param {array} classNames Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Notice({
  state,
  icon,
  iconPosition,
  message,
  rounded,
  classNames,
  ...props
}) {
  return (
    <div className={`notice ${getNoticeState(state)} ${getShape(rounded, 'notice')} ${addClassNames(classNames)}`} {...props}>
      {icon && iconPosition === 'left' ? <Icon {...icon} /> : null}
      <p>{message && message}</p>
      {icon && iconPosition === 'right' ? <Icon {...icon} /> : null}
    </div>
  );
}

Notice.propTypes = {
  id: PropTypes.string,
  rounded: PropTypes.bool,
  message: PropTypes.any,
  className: PropTypes.arrayOf(PropTypes.string),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.shape({
    id: PropTypes.string,
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  }),
  state: PropTypes.oneOf(['success', 'error', 'warn'])
};

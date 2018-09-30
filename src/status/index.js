import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * Status indicator
 * @param {string} state - The status state
 * @param {string} label - The status label
 * @param {array} className - Additional classNames (Optional)
 * @returns {string} Markup for status component
 */

export default function Status({state, label, classNames, ...props}) {
  return (
    <span className={`status status--${state} ${addClassNames(classNames)}`} {...props}>
      <span className="status-icon" aria-hidden="true" />
      <span className="status-text">{label}</span>
    </span>
  );
}

Status.propTypes = {
  label: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  state: PropTypes.oneOf(['on', 'off', 'idle'])
};

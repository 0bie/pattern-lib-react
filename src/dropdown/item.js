import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

/**
 * Dropdown item
 * @param {string} label - The item label
 * @param {object} icon - An icon (Optional)
 * @param {string} iconPosition - The icon position (Optional)
 * @returns {object} React element tree describing the component
 */

export default function DropdownItem({label, icon, iconPosition}) {
  return (
    <li className="dropdown-item" tabIndex="0">
      {icon && (iconPosition === 'left') ? <Icon {...icon} /> : null}
      <span className="vert--mid">{label}</span>
      {icon && iconPosition === 'right' ? <Icon {...icon} /> : null}
    </li>
  );
}

DropdownItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.shape({
    id: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  }),
  iconPosition: PropTypes.oneOf(['left', 'right'])
};

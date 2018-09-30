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

export default function DropdownItem(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition;
  return React.createElement("li", {
    className: "dropdown-item",
    tabIndex: "0"
  }, icon && iconPosition === 'left' ? React.createElement(Icon, icon) : null, React.createElement("span", {
    className: "vert--mid"
  }, label), icon && iconPosition === 'right' ? React.createElement(Icon, icon) : null);
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
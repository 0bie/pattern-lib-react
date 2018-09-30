import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
/**
 * Sidebar item
 * @param {object} content - React element
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function SidebarItem(_ref) {
  var content = _ref.content,
      classNames = _ref.classNames;
  return React.createElement("li", {
    className: "sidebar-item ".concat(addClassNames(classNames))
  }, content);
}
SidebarItem.propTypes = {
  content: PropTypes.element,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
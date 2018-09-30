function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
import { getActiveClass } from './utils';
/**
 * Tabset section
 * @param {string} id - The tabset `id`
 * @param {string} title - The item title
 * @param {any} content - The item content
 * @param {boolean} isActive - True if section is visible
 * @param {array} classNames - Additional className (Optional)
 * @returns {object} React element describing the component
 */

export default function TabSection(_ref) {
  var id = _ref.id,
      title = _ref.title,
      content = _ref.content,
      isActive = _ref.isActive,
      children = _ref.children,
      classNames = _ref.classNames,
      handleToggleActive = _ref.handleToggleActive,
      props = _objectWithoutProperties(_ref, ["id", "title", "content", "isActive", "children", "classNames", "handleToggleActive"]);

  return React.createElement("li", _extends({
    className: "tab-item ".concat(addClassNames(classNames), " ").concat(getActiveClass(isActive)),
    role: "presentation"
  }, props), React.createElement("h1", {
    id: "".concat(id, "-title"),
    tabIndex: !isActive ? 0 : -1,
    onClick: handleToggleActive,
    onKeyUp: handleToggleActive,
    className: "tab-title",
    role: "tab",
    "aria-controls": "".concat(id, "-section")
  }, title), React.createElement("section", {
    id: "".concat(id, "-section"),
    className: "tab-section",
    "aria-hidden": !isActive,
    "aria-labelledby": "".concat(id, "-title")
  }, title && React.createElement("h3", {
    tabIndex: "0"
  }, "Tab section ", title), content ? React.createElement("div", null, content) : children));
}
TabSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
  isActive: PropTypes.bool,
  handleToggleActive: PropTypes.func,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
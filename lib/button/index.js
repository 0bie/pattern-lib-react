function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { getShape, addClassNames } from '../utils';
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

export default function Button(_ref) {
  var size = _ref.size,
      label = _ref.label,
      icon = _ref.icon,
      rounded = _ref.rounded,
      loading = _ref.loading,
      children = _ref.children,
      classNames = _ref.classNames,
      iconPosition = _ref.iconPosition,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      props = _objectWithoutProperties(_ref, ["size", "label", "icon", "rounded", "loading", "children", "classNames", "iconPosition", "type"]);

  var isLoading = loading ? "btn--loading btn--loading--".concat(size) : '';
  var btnClassNames = "btn btn--".concat(size, " ").concat(isLoading, " ").concat(getShape(rounded, 'btn'), " ").concat(addClassNames(classNames));
  return React.createElement("button", _extends({
    type: type,
    className: btnClassNames
  }, props), icon && iconPosition === 'left' ? React.createElement(Icon, icon) : null, label ? React.createElement("span", {
    className: "btn-text"
  }, label) : loading ? React.createElement("span", {
    className: "text--sr"
  }, "loading") : icon && !iconPosition ? React.createElement(Icon, icon) : null, icon && iconPosition === 'right' ? React.createElement(Icon, icon) : null, children && children);
}
Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.object,
  iconPosition: PropTypes.string,
  rounded: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
  classNames: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};
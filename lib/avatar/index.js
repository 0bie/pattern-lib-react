function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { getShape, addClassNames } from '../utils';
import { getName, getInitials } from './utils';
/**
 * Avatar
 * @param {object} user - The avatar properties
 * @param {object} icon - Icon properties (Optional)
 * @param {string} size - The avatar size (sm|md|lg|xl)
 * @param {boolean} rounded - The avatar shape (Optional)
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Avatar(_ref) {
  var user = _ref.user,
      size = _ref.size,
      icon = _ref.icon,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["user", "size", "icon", "rounded", "classNames"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "avatar avatar--".concat(size, " ").concat(getShape(rounded, 'avatar'), " ").concat(addClassNames(classNames))
  }, props), user && user.image ? /*#__PURE__*/React.createElement("img", {
    className: "avatar-img",
    src: user.image.src,
    alt: "a profile photo of ".concat(getName(user.firstName, user.lastName))
  }) : icon ? /*#__PURE__*/React.createElement(Icon, icon) : user && (user.firstName || user.lastName) ? /*#__PURE__*/React.createElement("div", {
    className: "avatar-text"
  }, getInitials(user.firstName, user.lastName)) : null);
}
Avatar.propTypes = {
  rounded: PropTypes.bool,
  classNames: PropTypes.array,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.object
  }),
  icon: PropTypes.shape({
    id: PropTypes.string,
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  })
};
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
/**
 * @param {string} id - The icon id
 * @param {string} size - Icon size (sm|md|lg)
 * @param {string} title - Icon title
 * @param {string} fill - Icon fill color (Optional)
 * @param {string} description - Icon description (Optional)
 * @param {array} classNames - Additonal classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Icon(_ref) {
  var id = _ref.id,
      size = _ref.size,
      fill = _ref.fill,
      title = _ref.title,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 30 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 30 : _ref$height,
      classNames = _ref.classNames,
      description = _ref.description,
      props = _objectWithoutProperties(_ref, ["id", "size", "fill", "title", "width", "height", "classNames", "description"]);

  return React.createElement("svg", _extends({
    role: "img",
    width: width,
    height: height,
    style: {
      fill: fill
    },
    "aria-labelledby": "title",
    className: "icon icon--".concat(size, " ").concat(addClassNames(classNames))
  }, props), title ? React.createElement("title", null, title) : null, description ? React.createElement("desc", null, description) : null, React.createElement("use", {
    xlinkHref: "#".concat(id)
  }));
}
Icon.propTypes = {
  id: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  description: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};
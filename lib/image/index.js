function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
/**
 * Image
 * @param {string} size - The image size (xs|sm|md|lg|xl|full)
 * @param {string} src - The image URL
 * @param {string} caption - The image caption (Optional)
 * @param {string} alt - Alternate text
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Image(_ref) {
  var size = _ref.size,
      src = _ref.src,
      caption = _ref.caption,
      _ref$alt = _ref.alt,
      alt = _ref$alt === void 0 ? ' ' : _ref$alt,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["size", "src", "caption", "alt", "classNames"]);

  return React.createElement("figure", _extends({
    className: "image-container"
  }, props), React.createElement("img", {
    className: "image image--".concat(size, " ").concat(addClassNames(classNames)),
    src: src,
    alt: alt
  }), caption && React.createElement("figcaption", {
    className: "image-caption"
  }, caption));
}
Image.propTypes = {
  src: PropTypes.string,
  caption: PropTypes.string,
  alt: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'full'])
};
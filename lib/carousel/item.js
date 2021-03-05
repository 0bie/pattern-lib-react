function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
import { getActiveClass } from './utils';
/**
 * Carousel item
 * @param {object} image - The image properties
 * @param {string} title - The item title
 * @param {string} description - The item description
 * @param {boolean} isActive - True if item is visible
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} - React element tree describing the component
 */

export default function CarouselItem(_ref) {
  var image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      isActive = _ref.isActive,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["image", "title", "description", "isActive", "classNames"]);

  return /*#__PURE__*/React.createElement("li", _extends({
    className: "carousel-item ".concat(getActiveClass(isActive), " ").concat(addClassNames(classNames)),
    "aria-hidden": !isActive
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "media-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "media-item"
  }, /*#__PURE__*/React.createElement("img", {
    className: "carousel-image",
    src: image.url,
    alt: image.alt
  })), /*#__PURE__*/React.createElement("div", {
    className: "media-content"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "media-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "media-description"
  }, description)))));
}
CarouselItem.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  title: PropTypes.string,
  description: PropTypes.string,
  isActive: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
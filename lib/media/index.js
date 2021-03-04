function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import MediaItem from './item';
import { getShape, addClassNames } from '../utils';
/**
 * Media
 * @param {string} title - The media title
 * @param {string} description - The item description
 * @param {object} item - The media item (image|icon)
 * @param {boolean} footer - The media footer (Optional)
 * @param {any} footerContent - The footer content (Optional)
 * @param {array} classNames - Additional class names (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Media(_ref) {
  var title = _ref.title,
      description = _ref.description,
      item = _ref.item,
      footer = _ref.footer,
      footerContent = _ref.footerContent,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["title", "description", "item", "footer", "footerContent", "rounded", "classNames"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "media-container"
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "media ".concat(addClassNames(classNames), " ").concat(getShape(rounded))
  }, item && /*#__PURE__*/React.createElement(MediaItem, {
    item: item
  }), /*#__PURE__*/React.createElement("div", {
    className: "media-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "media-titlebar"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "media-title"
  }, title)), description && /*#__PURE__*/React.createElement("div", {
    className: "media-description"
  }, description)), footer && /*#__PURE__*/React.createElement("footer", {
    className: "media-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "block"
  }, footerContent)))));
}
Media.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  footer: PropTypes.bool,
  rounded: PropTypes.bool,
  footerContent: PropTypes.any,
  classNames: PropTypes.arrayOf(PropTypes.string),
  item: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
      size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    }),
    icon: PropTypes.shape({
      id: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    })
  })
};
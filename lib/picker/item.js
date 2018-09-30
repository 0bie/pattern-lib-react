function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
/**
 * Picker item
 * @param {string} id - The item `id`
 * @param {any} item - The media item
 * @param {string} title - The item title
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function PickerItem(_ref) {
  var id = _ref.id,
      item = _ref.item,
      title = _ref.title,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["id", "item", "title", "classNames"]);

  return React.createElement("div", _extends({
    className: "picker-item ".concat(addClassNames(classNames))
  }, props), React.createElement("label", {
    htmlFor: id
  }, React.createElement("div", {
    className: "checkbox-container"
  }, React.createElement("input", {
    className: "checkbox checkbox--sm checkbox--rounded hidden",
    type: "checkbox",
    name: id,
    id: id
  }), React.createElement("div", null)), React.createElement("div", {
    className: "media"
  }, React.createElement("div", {
    className: "media-item float--left"
  }, item), React.createElement("div", {
    className: "media-content"
  }, React.createElement("h4", {
    className: "media-title"
  }, title)))));
}
PickerItem.propTypes = {
  id: PropTypes.string,
  item: PropTypes.element,
  title: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
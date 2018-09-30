function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import PaginationItem from './item';
import { getShape, addClassNames } from '../utils';
/**
 * Pagination
 * @param {array} items - The pagination items
 * @param {boolean} rounded - The pagination shape
 * @param {array} classNames - Additional classNames
 * @returns {object} React element tree describing the component
 */

export default function Pagination(_ref) {
  var items = _ref.items,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["items", "rounded", "classNames", "children"]);

  return React.createElement("nav", _extends({
    className: "pagination cf ".concat(getShape(rounded, 'pagination'), " ").concat(addClassNames(classNames))
  }, props), React.createElement("div", {
    className: "pagination-wrap"
  }, React.createElement("span", {
    className: "pagination-ctrls"
  }, React.createElement("a", {
    className: "pagination-item--disabled"
  }, React.createElement("span", {
    className: "chevron"
  }, "\u2039"), React.createElement("span", null, "Prev")), React.createElement("a", null, React.createElement("span", null, "Next"), React.createElement("span", {
    className: "chevron"
  }, "\u203A")))), React.createElement("ul", {
    className: "pagination-list"
  }, children || items.map(function (_ref2) {
    var id = _ref2.id,
        link = _ref2.link,
        number = _ref2.number,
        classNames = _ref2.classNames;
    return React.createElement(PaginationItem, {
      key: id,
      link: link,
      number: number,
      classNames: classNames
    });
  })));
}
Pagination.propTypes = {
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    link: PropTypes.string,
    number: PropTypes.any,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};
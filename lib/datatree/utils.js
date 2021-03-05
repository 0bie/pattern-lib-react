function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import DataTreeItem from './item';
/**
 * Render data tree items
 * @param {array} items - Collection of item properties
 * @returns {object} React element tree describing `<DataTreeItem />` components
 */

export var renderItems = function renderItems(items) {
  if (items && items.length) {
    return items.map(function (item) {
      return /*#__PURE__*/React.createElement(DataTreeItem, _extends({
        key: item.id
      }, item));
    });
  }
};
/**
 * Render data tree sub-item
 * @param {string|array} item - Item label or collection of sub-item properties
 * @returns {object} React element tree describing sub-items
 */

export var renderSubItems = function renderSubItems(item) {
  if (item instanceof Array) {
    return item.map(function (item) {
      if (_typeof(item) == 'object') {
        return /*#__PURE__*/React.createElement("li", {
          key: item.id,
          className: "datatree-subitem"
        }, /*#__PURE__*/React.createElement("span", {
          className: "datatree-subtitle"
        }, item.title), /*#__PURE__*/React.createElement("ul", {
          className: "datatree-sublist"
        }, renderSubItems(item.value)));
      }

      return /*#__PURE__*/React.createElement("li", {
        key: "subitem-".concat(item),
        className: "datatree-subitem"
      }, /*#__PURE__*/React.createElement("span", null, item));
    });
  }

  return /*#__PURE__*/React.createElement("li", {
    className: "datatree-subitem"
  }, /*#__PURE__*/React.createElement("span", null, item));
};
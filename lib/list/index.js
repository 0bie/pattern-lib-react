function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './item.js';
import { getShape, addClassNames } from '../utils';
/**
 * List
 * @param {array} items - The list items
 * @param {array} children - Collection of React elements
 * @param {array} classNames - Additional Class names (Optional)
 * @returns {object} React element tree describing the component
 */

export default function List(_ref) {
  var items = _ref.items,
      children = _ref.children,
      classNames = _ref.classNames,
      rounded = _ref.rounded,
      props = _objectWithoutProperties(_ref, ["items", "children", "classNames", "rounded"]);

  return /*#__PURE__*/React.createElement("ul", _extends({
    className: "list ".concat(addClassNames(classNames), " ").concat(getShape(rounded))
  }, props), children || items && items.map(function (_ref2) {
    var id = _ref2.id,
        content = _ref2.content,
        classNames = _ref2.classNames;
    return /*#__PURE__*/React.createElement(ListItem, {
      key: id,
      content: content,
      classNames: classNames
    });
  }));
}
List.propTypes = {
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.any,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};
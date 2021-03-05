function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
import { renderItems } from './utils';
/**
 * Data tree
 * @param {array} items - The data tree items
 * @param {array} children - Collection of React elements
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function DataTree(_ref) {
  var items = _ref.items,
      classNames = _ref.classNames,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["items", "classNames", "children"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "datatree ".concat(addClassNames(classNames))
  }, props), /*#__PURE__*/React.createElement("ul", {
    className: "datatree-list"
  }, children || renderItems(items)));
}
DataTree.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.element),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    item: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])
  }))
};
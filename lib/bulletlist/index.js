function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import BulletItem from './item';
import { addClassNames } from '../utils';
/**
 * Bulletlist
 * @param {array} items - The bulletlist items
 * @param {array} classNames - Additional classNames (Optional)
 * @param {array} children - Collection of react components (`BulletItem`)
 * @returns {object} React element tree describing the component
 */

export default function Bulletlist(_ref) {
  var items = _ref.items,
      classNames = _ref.classNames,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["items", "classNames", "children"]);

  return React.createElement("ul", _extends({
    className: "bulletlist ".concat(addClassNames(classNames))
  }, props), children || items.map(function (_ref2) {
    var id = _ref2.id,
        content = _ref2.content,
        classNames = _ref2.classNames;
    return React.createElement(BulletItem, {
      key: id,
      content: content,
      classNames: classNames
    });
  }));
}
Bulletlist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  classNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.element)
};
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import CardlistItem from './item';
import { addClassNames } from '../utils';
/**
 * Cardlist
 * @param {string} id - The cardlist `id`
 * @param {string} title - The cardlist title
 * @param {array} items - The cardlist items
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} - React element tree describing the component
 */

export default function Cardlist(_ref) {
  var id = _ref.id,
      title = _ref.title,
      items = _ref.items,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["id", "title", "items", "classNames"]);

  return React.createElement("div", _extends({
    className: "cardlist-container ".concat(addClassNames(classNames))
  }, props), title && React.createElement("header", {
    className: "cardlist-header"
  }, React.createElement("h1", {
    className: "cardlist-title"
  }, title)), React.createElement("ul", {
    id: id,
    className: "cardlist"
  }, items.map(function (_ref2) {
    var id = _ref2.id,
        image = _ref2.image,
        title = _ref2.title,
        subtitle = _ref2.subtitle,
        details = _ref2.details,
        classNames = _ref2.classNames;
    return React.createElement(CardlistItem, {
      key: id,
      image: image,
      title: title,
      subtitle: subtitle,
      details: details,
      classNames: classNames
    });
  })));
}
Cardlist.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.object,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    details: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};
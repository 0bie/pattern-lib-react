function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import PickerItem from './item';
import { addClassNames } from '../utils';
/**
 * Render a group of picker items
 * @param {id} id - The group `id`
 * @param {string} title - The group title
 * @param {array} pickerArr - Collection of picker items
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function PickerGroup(_ref) {
  var id = _ref.id,
      title = _ref.title,
      pickerArr = _ref.pickerArr,
      classNames = _ref.classNames;
  return /*#__PURE__*/React.createElement("div", {
    id: id,
    className: "picker-group ".concat(addClassNames(classNames))
  }, /*#__PURE__*/React.createElement("header", {
    className: "picker-groupheader"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "picker-subtitle"
  }, title)), pickerArr.map(function (item) {
    return /*#__PURE__*/React.createElement(PickerItem, _extends({
      key: item.id
    }, item));
  }));
}
PickerGroup.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  pickerArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.element,
    title: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};
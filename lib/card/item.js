function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Image from '../image';
/**
 * Card item
 * @param {object} image - The image properties
 * @param {object} icon - The icon properties
 * @returns {object} - React element tree describing the component
 */

export default function CardItem(_ref) {
  var image = _ref.image,
      icon = _ref.icon;
  return React.createElement("div", {
    className: "card-item"
  }, image && React.createElement(Image, _extends({}, image, {
    size: "xl"
  })), icon && React.createElement(Icon, icon));
}
CardItem.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  icon: PropTypes.shape({
    id: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  })
};
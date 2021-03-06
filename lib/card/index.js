function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import CardItem from './item';
import CardFooter from './footer';
import { getShape, addClassNames } from '../utils';
/**
 * Card
 * @param {object} image - The image properties (Optional)
 * @param {object} icon - The icon properties (Optional)
 * @param {string} title - The card title
 * @param {string} ctaLabel - The cta label
 * @param {function} handleCta - Callback function executed when cta is clicked
 * @param {string} description - The card description
 * @param {array} actions - Call to actions
 * @param {array} classNames - Additional classnames (Optional)
 * @param {boolean} footer - The card footer (Optional)
 * @param {boolean} rounded - The card shape (Optional)
 * @returns {object} - React element tree describing the component
 */

export default function Card(_ref) {
  var image = _ref.image,
      icon = _ref.icon,
      title = _ref.title,
      ctaLabel = _ref.ctaLabel,
      handleCta = _ref.handleCta,
      description = _ref.description,
      actions = _ref.actions,
      footer = _ref.footer,
      rounded = _ref.rounded,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["image", "icon", "title", "ctaLabel", "handleCta", "description", "actions", "footer", "rounded", "classNames"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "card-container ".concat(getShape(rounded), " ").concat(addClassNames(classNames))
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, (icon || image) && /*#__PURE__*/React.createElement(CardItem, {
    icon: icon,
    image: image
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-titlebar"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "card-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "title-text"
  }, title)), ctaLabel && /*#__PURE__*/React.createElement(Button, {
    size: "xs",
    tabIndex: "0",
    label: ctaLabel,
    onClick: handleCta,
    classNames: [getShape(rounded)]
  })), description && /*#__PURE__*/React.createElement("div", {
    className: "card-description"
  }, description)), footer && /*#__PURE__*/React.createElement("div", {
    className: "card-footer"
  }, /*#__PURE__*/React.createElement(CardFooter, {
    actions: actions
  }))));
}
Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  actions: PropTypes.array,
  footer: PropTypes.bool,
  rounded: PropTypes.bool,
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  ctaLabel: PropTypes.string,
  handleCta: PropTypes.func,
  classNames: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.shape({
    id: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  })
};
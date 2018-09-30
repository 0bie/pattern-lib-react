function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import HeroTitle from './title';
import HeroCta from './cta';
import { addClassNames } from '../utils';
/**
 * Hero
 * @param {object} image - The image properties
 * @param {string} title - The hero title
 * @param {string} subtitle - The hero subtitle
 * @param {object} cta - The call-to-action properties
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Hero(_ref) {
  var cta = _ref.cta,
      image = _ref.image,
      title = _ref.title,
      subtitle = _ref.subtitle,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["cta", "image", "title", "subtitle", "classNames"]);

  return React.createElement("div", _extends({
    className: "hero-container ".concat(addClassNames(classNames))
  }, props), React.createElement("section", {
    className: "hero"
  }, React.createElement("div", {
    className: "hero-content"
  }, title && React.createElement(HeroTitle, {
    title: title,
    subtitle: subtitle
  }), cta && React.createElement(HeroCta, {
    cta: cta
  })), React.createElement("div", {
    className: "hero-placeholder"
  }), image && React.createElement("img", {
    className: "hero-image",
    src: image.url,
    alt: image.alt
  })));
}
Hero.propTypes = {
  cta: PropTypes.object,
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
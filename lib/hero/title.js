function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
/**
 * Hero title
 * @param {string} title - The hero title
 * @param {string} subtitle - The hero subtitle
 * @returns {object} React element tree describing the component
 */

export default function HeroTitle(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      props = _objectWithoutProperties(_ref, ["title", "subtitle"]);

  return /*#__PURE__*/React.createElement("div", props, subtitle ? /*#__PURE__*/React.createElement("span", {
    className: "hero-subtitle"
  }, subtitle) : '', /*#__PURE__*/React.createElement("div", {
    className: "hero-titlewrap"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero-title"
  }, title)));
}
HeroTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};
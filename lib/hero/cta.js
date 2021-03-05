function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
/**
 * Hero call-to-action
 * @param {object} cta - The cta properties
 * @param {object} [cta].icon - The cta icon properties
 * @param {string} [cta].label - The cta label
 * @returns {object} React element that desecribes the component
 */

export default function HeroCta(_ref) {
  var cta = _ref.cta,
      props = _objectWithoutProperties(_ref, ["cta"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: "hero-cta"
  }, props), cta.icon ? /*#__PURE__*/React.createElement(Icon, cta.icon) : '', /*#__PURE__*/React.createElement("span", {
    className: "vert--mid"
  }, cta.label));
}
HeroCta.propTypes = {
  cta: PropTypes.shape({
    icon: PropTypes.object,
    label: PropTypes.string
  })
};
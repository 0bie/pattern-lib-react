function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import TimelineEvent from './event';
import { addClassNames } from '../utils';
/**
 * Timeline
 * @param {array} events - The timeline events
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element describing the component
 */

export default function Timeline(_ref) {
  var events = _ref.events,
      classNames = _ref.classNames,
      props = _objectWithoutProperties(_ref, ["events", "classNames"]);

  return React.createElement("div", _extends({
    className: "timeline ".concat(addClassNames(classNames))
  }, props), React.createElement("div", {
    className: "timeline-content"
  }, events.map(function (_ref2) {
    var id = _ref2.id,
        time = _ref2.time,
        title = _ref2.title,
        avatar = _ref2.avatar,
        content = _ref2.content,
        classNames = _ref2.classNames;
    return React.createElement(TimelineEvent, {
      key: id,
      time: time,
      title: title,
      avatar: avatar,
      content: content,
      classNames: classNames
    });
  })));
}
Timeline.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  events: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string,
    title: PropTypes.string,
    avatar: PropTypes.shape({
      rounded: PropTypes.bool,
      classNames: PropTypes.array,
      size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
      user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        image: PropTypes.string
      })
    }),
    content: PropTypes.any,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};
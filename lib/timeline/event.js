import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
import Avatar from '../avatar';
/**
 * Timeline event
 * @param {string} time - The event time
 * @param {string} title - The event title
 * @param {any} content - The event content
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element describing the component
 */

export default function TimelineEvent(_ref) {
  var time = _ref.time,
      title = _ref.title,
      avatar = _ref.avatar,
      content = _ref.content,
      classNames = _ref.classNames;
  return React.createElement("div", {
    className: "timeline-event ".concat(addClassNames(classNames))
  }, React.createElement("div", {
    className: "timeline-metadata"
  }, React.createElement("span", {
    className: "timeline-avatar"
  }, avatar && React.createElement(Avatar, avatar)), React.createElement("time", {
    className: "timeline-hours"
  }, time)), React.createElement("div", {
    className: "timeline-card"
  }, React.createElement("div", {
    className: "timeline-caret"
  }), title && React.createElement("h4", {
    className: "timeline-title"
  }, title), React.createElement("div", null, content)));
}
TimelineEvent.propTypes = {
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
};
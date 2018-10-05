import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../avatar';
import Icon from '../icon';
import { addClassNames } from '../utils';
import { getName } from './utils';
/**
 * Blockquote footer
 * @param {object} user - The quote author's info
 * @param {string} link - The quote url
 * @param {object} linkCta - The cta icon properties
 * @param {function} handleCta - Callback function executed when cta is clicked
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the components
 */

export default function BlockquoteFooter(_ref) {
  var user = _ref.user,
      link = _ref.link,
      linkCta = _ref.linkCta,
      handleCta = _ref.handleCta,
      classNames = _ref.classNames;
  return React.createElement("footer", {
    className: "blockquote-footer ".concat(addClassNames(classNames))
  }, React.createElement("div", {
    className: "media"
  }, React.createElement("div", {
    className: "media-item mr--xs"
  }, (user.firstName || user.lastName) && React.createElement(Avatar, {
    user: user,
    size: "sm"
  })), (user.firstName || user.lastName) && React.createElement("div", {
    className: "media-content"
  }, React.createElement("h4", {
    className: "media-title"
  }, getName(user.firstName, user.lastName)))), React.createElement("div", null, user.quote && React.createElement("a", {
    href: link,
    onClick: handleCta,
    className: "icon-container btn"
  }, React.createElement(Icon, linkCta))));
}
BlockquoteFooter.propTypes = {
  user: PropTypes.object,
  link: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.object),
  handleCta: PropTypes.func,
  linkCta: PropTypes.shape({
    id: PropTypes.string,
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  })
};
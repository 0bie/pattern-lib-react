import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
/**
 * Card footer
 * @param {array} actions - The call to actions
 * @returns {object} React element tree describing the component
 */

export default function CardFooter(_ref) {
  var actions = _ref.actions;
  return React.createElement("div", {
    className: "content"
  }, actions.map(function (action) {
    return React.createElement(Button, {
      size: "sm",
      icon: action,
      key: action.id
    });
  }));
}
CardFooter.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object)
};
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
/**
 * Modal header
 * @param {string} title - Modal title
 * @param {boolean} preventClose - True if user can't dismiss
 * @param {function} handleClose - Callback function executed on close
 * @returns {object} React element tree describing the component
 */

export default function ModalHeader(_ref) {
  var title = _ref.title,
      preventClose = _ref.preventClose,
      handleClose = _ref.handleClose;
  var closeButton = null;

  if (!preventClose) {
    closeButton = React.createElement("button", {
      tabIndex: "0",
      type: "button",
      onClick: handleClose,
      className: "btn btn--sm btn--link"
    }, React.createElement(Icon, {
      id: "x1",
      size: "sm",
      title: "close",
      classNames: ['vert--mid'],
      description: "close the modal"
    }));
  }

  return React.createElement("header", {
    className: "modal-header"
  }, React.createElement("h1", {
    className: "modal-title"
  }, title), closeButton);
}
ModalHeader.propTypes = {
  title: PropTypes.string,
  handleClose: PropTypes.func,
  preventClose: PropTypes.bool
};
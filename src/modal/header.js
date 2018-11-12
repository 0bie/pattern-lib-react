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

export default function ModalHeader({title, preventClose, handleClose}) {
  let closeButton = null;
  if (!preventClose) {
    closeButton =
      <button
        tabIndex="0"
        type="button"
        onClick={handleClose}
        className="btn btn--sm btn--link"
      >
        <Icon
          id="x1"
          size="sm"
          title="close"
          classNames={['vert--mid']}
          description="close the modal"
        />
      </button>;
  }
  return (
    <header className="modal-header">
      <h1 className="modal-title">{title}</h1>
      {closeButton}
    </header>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string,
  handleClose: PropTypes.func,
  preventClose: PropTypes.bool
};

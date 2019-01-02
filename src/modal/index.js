import React from 'react';
import PropTypes from 'prop-types';
import ModalHeader from './header';
import {getShape, addClassNames, preventOuterScroll} from '../utils';
import {getActiveClassName} from './utils';

/**
 * Modal
 * @param {string} title - The modal title
 * @param {any} content - The modal content
 * @param {array} classNames - Additional classNames (Optional)
 * @param {boolean} rounded - The modal shape
 * @param {boolean} preventClose - True if user can't dismiss
 * @returns {object} React element tree describing the component
 */

export default class Modal extends React.Component {

  handleScroll = (evt) => {
    preventOuterScroll(evt);
  }

  render() {
    const {title, content, rounded, classNames, state, handleClose, preventClose, ...props} = this.props;
    return (
      <div
        {...props}
        className={`modal-container ${getShape(rounded)} ${addClassNames(classNames)} ${getActiveClassName(state)}`}
      >
        {<ModalHeader title={title} preventClose={preventClose} handleClose={handleClose} />}
        <section className="modal" onWheel={this.handleScroll}>
          <div className="mb--xs">{content}</div>
        </section>
      </div>
    );
  }

}

Modal.propTypes = {
  state: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.element,
  rounded: PropTypes.bool,
  handleClose: PropTypes.func,
  preventClose: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string)
};

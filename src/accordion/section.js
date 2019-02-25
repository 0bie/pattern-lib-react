import React from 'react';
import {addClassNames} from '../utils';
import PropTypes from 'prop-types';
import {getActiveClass} from './utils';

/**
 * Accordion section
 * @param {string} id - The section id
 * @param {string} title - The title
 * @param {object} children - React element
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing component
*/

export default class AccordionSection extends React.Component {

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.content = React.createRef();
  }

  state = {
    isActive: false
  }

  handleToggle = (evt) => {
    const {isActive} = this.state;
    const container = this.container.current;
    const content = this.content.current;
    const toggleInitiated = !isActive && container.clientHeight !== content.clientHeight;
    const key = evt.keyCode || evt.which;
    if (evt.type === 'keyup' && key !== 13) return null;
    this.setState((prevState) => ({
      isActive: !prevState.isActive
    }));
    /**
     * Force the style mutation onto the task queue
     * 100ms delay required for transition between states
     */
    setTimeout(() => {
      container.setAttribute('style', `height: ${toggleInitiated ? content.clientHeight + 'px' : 0}`);
    }, 100);
    container.style.height = content.clientHeight + 'px';
  }

  handleTransitionEnd = () => {
    const container = this.container.current;
    const content = this.content.current;
    const contentIsOpen = container.style.height === content.clientHeight;
    const contentIsClosed = (container.style.height < content.clientHeight) || (container.style.height === '0px');
    if (contentIsClosed) return false;
    if (!contentIsOpen && !contentIsClosed) container.style.height = 'auto';
  }

  render() {
    const {isActive} = this.state;
    const {id, title, children, classNames, ...props} = this.props;
    return (
      <section key={id} className={`accordion-section ${getActiveClass(isActive)} ${addClassNames(classNames)}`} {...props}>
        <h3
          id={id}
          className="accordion-title"
          tabIndex={isActive ? 0 : -1}
          onClick={this.handleToggle}
          onKeyUp={this.handleToggle}
        >
          <span className="title-text">{title}</span>
        </h3>
        <div className="accordion-wrap" ref={this.container} onTransitionEnd={this.handleTransitionEnd}>
          <div
            ref={this.content}
            aria-labelledby={id}
            aria-hidden={!isActive}
            className="accordion-content"
          >
            {children}
          </div>
        </div>
      </section>
    );
  }

}

AccordionSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
  classNames: PropTypes.array
};

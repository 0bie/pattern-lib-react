import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import {getShape, addClassNames} from '../utils';

/**
 * Render a carousel
 * @param {string} id - The carousel `id`
 * @param {boolean} rounded - The carousel shape
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} - React element tree describing the component
 */

export default class Carousel extends Component {

  state = {
    activeItem: 1
  }

  handleNextItem = () => {
    const maxItems = React.Children.count(this.props.children);
    const activeItem = this.state.activeItem;
    let nextItem = activeItem + 1;
    if (nextItem > maxItems) nextItem = 1;
    this.setState(() => ({
      activeItem: nextItem
    }));
  }

  handlePrevItem = () => {
    const maxItems = React.Children.count(this.props.children);
    const activeItem = this.state.activeItem;
    let prevItem = activeItem - 1;
    if (prevItem < 1) prevItem = maxItems;
    this.setState(() => ({
      activeItem: prevItem
    }));
  }

  renderChildren() {
    const {children} = this.props;
    const {activeItem} = this.state;
    return React.Children.map(children, (child, i) => {
      return React.cloneElement(child, {
        isActive: i + 1 === activeItem
      });
    });
  }

  render() {
    const {id, rounded, classNames, ...props} = this.props;
    return (
      <div id={id} className={`carousel-container ${addClassNames(classNames)}`} {...props}>
        <div className={`carousel ${getShape(rounded, 'carousel')}`}>
          <ul className="carousel-list">{this.renderChildren()}</ul>
        </div>
        <div className="carousel-controls">
          <Button
            size="md"
            tabIndex="0"
            onClick={this.handlePrevItem}
            icon={{size: 'md', id: 'chevron-left', title: 'previous item', classNames: ['vert--mid']}}
          />
          <Button
            size="md"
            tabIndex="0"
            onClick={this.handleNextItem}
            icon={{size: 'md', title: 'next item', id: 'chevron-right', classNames: ['vert--mid']}}
          />
        </div>
      </div>
    );
  }

}

Carousel.propTypes = {
  id: PropTypes.string,
  rounded: PropTypes.bool,
  children: PropTypes.any,
  classNames: PropTypes.arrayOf(PropTypes.string)
};

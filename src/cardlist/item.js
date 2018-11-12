import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Button from '../button';
import {addClassNames} from '../utils';

/**
 * Cardlist item
 * @param {object} image - The image properties
 * @param {string} title - The item title
 * @param {string} subtitle - The item sub-title
 * @param {string} details - The item details
 * @param {function} handleCta - Callback function executed when cta is clicked
 * @param {array} classNames - Additional classNames
 * @returns {object} - React element tree describing the component
 */

export default class CardlistItem extends React.Component {

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.image = React.createRef();
    this.imageContainer = React.createRef();
    this.toggleButton = React.createRef();
  }

  state = {
    isActive: false
  }

  handleToggle = (evt) => {
    let toggleInitiated;
    const key = evt.keyCode || evt.which;
    const container = this.container.current;
    const toggleButton = this.toggleButton.current;
    const image = this.image.current;
    const imageContainer = this.imageContainer.current;
    const toggleIcon = toggleButton.querySelector('.icon--expand');

    const toggled = (evt.target === toggleButton);
    if (evt.type === 'keyup' && key !== 13) return null;
    if (evt.type === 'keyup' && key === 13) evt.preventDefault();

    if (image.clientHeight) {
      toggleInitiated = container.contains(evt.target) && toggled;
    }

    if (toggleInitiated) {
      const imageIsExpanded = (imageContainer.clientHeight >= image.clientHeight);
      toggleIcon.setAttribute('style', `transform: rotate(${imageIsExpanded ? 0 : '0.12turn'})`);
      /**
       * Force the style mutation onto the task queue
       * 100ms delay required for transition between states
       */
      setTimeout(() => {
        imageContainer.setAttribute('style', `height: ${!imageIsExpanded ? image.clientHeight + 'px' : 0}`);
      }, 100);
      imageContainer.style.height = image.clientHeight + 'px';
      this.setState((prevState) => ({
        isActive: !prevState.isActive
      }));
    }
  }

  handleTransitionEnd = () => {
    const container = this.container.current;
    const image = container.querySelector('img');
    const imageContainer = container.querySelector('.image-container');
    const contentIsOpen = imageContainer.style.height === image.clientHeight;
    const contentIsClosed = imageContainer.style.height < image.clientHeight || imageContainer.style.height === '0px';
    if (contentIsClosed) return false;
    if (!contentIsOpen && !contentIsClosed) imageContainer.style.height = 'auto';
  }

  render() {
    const {isActive} = this.state;
    const {image, title, subtitle, details, handleCta, classNames, ...props} = this.props;
    return (
      <li
        ref={this.container}
        className={`cardlist-item ${addClassNames(classNames)}`}
        {...props}
      >
        <div className="cardlist-content">
          <a className="cardlist-overlay" href="#" />
          <div
            ref={this.imageContainer}
            className="image-container"
            onTransitionEnd={this.handleTransitionEnd}
          >
            <div className="media-placeholder" />
            <img src={image.src} alt={image.alt} ref={this.image} />
          </div>
          <div className="cardlist-options">
            <Button
              size="xs"
              onClick={handleCta}
              icon={{size: 'md', id: 'heart', title: 'favorite', description: 'favorite this content'}}
            />
            <a
              ref={this.toggleButton}
              title="toggle card image"
              tabIndex={!isActive ? 0 : -1}
              onClick={this.handleToggle}
              onKeyUp={this.handleToggle}
              className="btn btn--xs cardlist-expand"
            >
              <Icon
                size="md"
                id="plus"
                title="toggle"
                classNames={['icon--expand']}
                description="hide/show content"
              />
            </a>
            <Button
              size="xs"
              onClick={handleCta}
              classNames={['cardlist-share']}
              icon={{size: 'sm', id: 'share', title: 'share this content'}}
            />
            <Button
              size="xs"
              onClick={handleCta}
              icon={{size: 'sm', id: 'person', title: 'user avatar', description: 'the default user'}}
            />
          </div>
        </div>
        <div className="cardlist-info">
          {title ? <h3>{title}</h3> : null}
          {subtitle ? <h4>{subtitle}</h4> : null}
          <div>{details}</div>
        </div>
      </li>
    );
  }

}

CardlistItem.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  title: PropTypes.string,
  sibtitle: PropTypes.string,
  details: PropTypes.string,
  handleCta: PropTypes.func,
  classNames: PropTypes.arrayOf(PropTypes.string)
};

import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';
import {getActiveClass} from './utils';

/**
 * Carousel item
 * @param {object} image - The image properties
 * @param {string} title - The item title
 * @param {string} description - The item description
 * @param {boolean} isActive - True if item is visible
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} - React element tree describing the component
 */

export default function CarouselItem({
  image,
  title,
  description,
  isActive,
  classNames,
  ...props
}) {
  return (
    <li className={`carousel-item ${getActiveClass(isActive)} ${addClassNames(classNames)}`} aria-hidden={!isActive} {...props}>
      <div className="media-container">
        <div className="media">
          <div className="media-item">
            <img className="carousel-image" src={image.url} alt={image.alt} />
          </div>
          <div className="media-content">
            <h3 className="media-title">{title}</h3>
            <div className="media-description">{description}</div>
          </div>
        </div>
      </div>
    </li>
  );
}

CarouselItem.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  }),
  title: PropTypes.string,
  description: PropTypes.string,
  isActive: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string)
};

import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * Image
 * @param {string} size - The image size (xs|sm|md|lg|xl)
 * @param {string} src - The image URL
 * @param {string} caption - The image caption (Optional)
 * @param {string} alt - Alternate text
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Image({
  size,
  src,
  caption,
  alt = ' ',
  classNames,
  ...props
}) {
  return (
    <figure className="image-container" {...props}>
      <img className={`image image--${size} ${addClassNames(classNames)}`} src={src} alt={alt} />
      {caption && <figcaption className="image-caption">{caption}</figcaption>}
    </figure>
  );
}

Image.propTypes = {
  src: PropTypes.string,
  caption: PropTypes.string,
  alt: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

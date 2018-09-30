import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * @param {string} id - The icon id
 * @param {string} size - Icon size (sm|md|lg)
 * @param {string} title - Icon title
 * @param {string} fill - Icon fill color (Optional)
 * @param {string} description - Icon description (Optional)
 * @param {array} classNames - Additonal classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Icon({
  id,
  size,
  fill,
  title,
  width = 30,
  height = 30,
  classNames,
  description,
  ...props
}) {
  return (
    <svg
      role="img"
      width={width}
      height={height}
      style={{fill}}
      aria-labelledby="title"
      className={`icon icon--${size} ${addClassNames(classNames)}`}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {description ? <desc>{description}</desc> : null}
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}

Icon.propTypes = {
  id: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  description: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Media item
 * @param {object} icon - Icon properties
 * @param {object} image - Image properties
 * @returns {object} React element tree describing the component
 */

export default function MediaItem({item}) {
  return (
    <div className="media-item">
      {item}
    </div>
  );
}

MediaItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
      size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    }),
    icon: PropTypes.shape({
      id: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string
    })
  })
};

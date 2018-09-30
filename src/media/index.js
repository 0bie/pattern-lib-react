import React from 'react';
import PropTypes from 'prop-types';
import MediaItem from './item';
import {getShape, addClassNames} from '../utils';

/**
 * Media
 * @param {string} title - The media title
 * @param {string} description - The item description
 * @param {object} item - The media item (image|icon)
 * @param {boolean} footer - The media footer (Optional)
 * @param {any} footerContent - The footer content (Optional)
 * @param {array} classNames - Additional class names (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Media({
  title,
  description,
  item,
  footer,
  footerContent,
  rounded,
  classNames,
  ...props
}) {
  return (
    <div className="media-container" {...props}>
      <div className={`media ${addClassNames(classNames)} ${getShape(rounded)}`}>
        {item && <MediaItem item={item} />}
        <div className="media-content">
          <div className="media-titlebar">
            <h4 className="media-title">{title}</h4>
          </div>
          {description &&
            <div className="media-description">{description}</div>}
        </div>
        {footer && <footer className="media-footer">
          <div className="content"><span className="block">{footerContent}</span></div>
        </footer>}
      </div>
    </div>
  );
}

Media.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  footer: PropTypes.bool,
  rounded: PropTypes.bool,
  footerContent: PropTypes.any,
  classNames: PropTypes.arrayOf(PropTypes.string),
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
      description: PropTypes.string,
      size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    })
  })
};

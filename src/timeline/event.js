import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';
import Avatar from '../avatar';

/**
 * Timeline event
 * @param {string} time - The event time
 * @param {string} title - The event title
 * @param {any} content - The event content
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element describing the component
 */

export default function TimelineEvent({time, title, avatar, content, classNames}) {
  return (
    <div className={`timeline-event ${addClassNames(classNames)}`}>
      <div className="timeline-metadata">
        <span className="timeline-avatar">{avatar && <Avatar {...avatar} />}</span>
        <time className="timeline-hours">{time}</time>
      </div>
      <div className="timeline-card">
        <div className="timeline-caret" />
        {title && <h4 className="timeline-title">{title}</h4>}
        <div>{content}</div>
      </div>
    </div>
  );
}

TimelineEvent.propTypes = {
  time: PropTypes.string,
  title: PropTypes.string,
  avatar: PropTypes.shape({
    rounded: PropTypes.bool,
    classNames: PropTypes.array,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      image: PropTypes.string
    })
  }),
  content: PropTypes.any,
  classNames: PropTypes.arrayOf(PropTypes.string)
};

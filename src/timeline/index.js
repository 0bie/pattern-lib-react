import React from 'react';
import PropTypes from 'prop-types';
import TimelineEvent from './event';
import {addClassNames} from '../utils';

/**
 * Timeline
 * @param {array} events - The timeline events
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element describing the component
 */

export default function Timeline({events, classNames, ...props}) {
  return (
    <div className={`timeline ${addClassNames(classNames)}`} {...props}>
      <div className="timeline-content">
        {events.map(({id, time, title, avatar, content, classNames}) =>
          <TimelineEvent
            key={id}
            time={time}
            title={title}
            avatar={avatar}
            content={content}
            classNames={classNames}
          />
        )}
      </div>
    </div>
  );
}

Timeline.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  events: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string,
    title: PropTypes.string,
    avatar: PropTypes.shape({
      rounded: PropTypes.bool,
      classNames: PropTypes.array,
      size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
      user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        image: PropTypes.object
      })
    }),
    content: PropTypes.any,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};

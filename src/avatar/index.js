import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import {getShape, addClassNames} from '../utils';
import {getName, getInitials} from './utils';

/**
 * Avatar
 * @param {object} user - The avatar properties
 * @param {object} icon - Icon properties (Optional)
 * @param {string} size - The avatar size (sm|md|lg|xl)
 * @param {boolean} rounded - The avatar shape (Optional)
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Avatar({user, size, icon, rounded, classNames, ...props}) {
  return (
    <div className={`avatar avatar--${size} ${getShape(rounded, 'avatar')} ${addClassNames(classNames)}`} {...props}>
      {user && user.image ? (<img className="avatar-img" src={user.image.src} alt={`a profile photo of ${getName(user.firstName, user.lastName)}`} />
      ) : icon ? (<Icon {...icon} />
      ) : user && (user.firstName || user.lastName) ? (<div className="avatar-text">{getInitials(user.firstName, user.lastName)}</div>
      ) : null}
    </div>
  );
}

Avatar.propTypes = {
  rounded: PropTypes.bool,
  classNames: PropTypes.array,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.object
  }),
  icon: PropTypes.shape({
    id: PropTypes.string,
    fill: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    description: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  })
};

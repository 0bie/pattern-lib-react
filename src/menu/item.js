import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import {addClassNames} from '../utils';

/**
 * Menu item
 * @param {string} content - The item content
 * @param {object} icon - Icon properties (Optional)
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function MenuItem({content, icon, classNames, ...props}) {
  return (
    <li className={`menu-item ${addClassNames(classNames)}`} {...props}>
      {icon && <Icon {...icon} />}
      {content}
    </li>
  );
}

MenuItem.propTypes = {
  content: PropTypes.element,
  classNames: PropTypes.arrayOf(PropTypes.string),
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

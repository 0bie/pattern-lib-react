import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import {addClassNames} from '../utils';

/**
 * Menu item
 * @param {string|object} content - The item content
 * @param {object} icon - Icon properties (Optional)
 * @param {function} handleItem - Callback function executed when item is clicked
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function MenuItem({content, icon, handleItem, classNames, ...props}) {
  return (
    <li className={`menu-item ${addClassNames(classNames)}`} {...props}>
      {icon && <Icon {...icon} />}
      <a href="#" onClick={handleItem}>{content}</a>
    </li>
  );
}

MenuItem.propTypes = {
  handleItem: PropTypes.func,
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

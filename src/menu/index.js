import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './item';
import {getShape, addClassNames} from '../utils';

/**
 * Menu
 * @param {array} items - The menu items
 * @param {string} title - The menu title (Optional)
 * @param {array} classNames - Additional classNames
 * @param {boolean} rounded - The menu shape (Optional)
 * @returns {object} React element tree describing the component
 */

export default function Menu({title, items, rounded, classNames, ...props}) {
  return (
    <nav className={addClassNames(classNames)} {...props}>
      <ul className={`menu ${getShape(rounded)}`}>
        {title && <li className="menu-header">
          <span className="menu-title pl--xs pr--xs">{title}</span>
        </li>}
        {items.map(({id, content, icon, classNames}) =>
          <MenuItem
            key={id}
            icon={icon}
            content={content}
            classNames={classNames}
          />)}
      </ul>
    </nav>
  );
}

Menu.propTypes = {
  title: PropTypes.string,
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.element,
    icon: PropTypes.shape({
      id: PropTypes.string,
      classNames: PropTypes.arrayOf(PropTypes.string),
      size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
    })
  }))
};

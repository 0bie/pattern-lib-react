import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * Sidebar item
 * @param {object} content - React element
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function SidebarItem({content, classNames}) {
  return (
    <li className={`sidebar-item ${addClassNames(classNames)}`}>{content}</li>
  );
}

SidebarItem.propTypes = {
  content: PropTypes.element,
  classNames: PropTypes.arrayOf(PropTypes.string)
};

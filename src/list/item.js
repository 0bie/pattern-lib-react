import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * List item
 * @param {string} content - The item content
 * @param {array} classNames - Additional Class names (Optional)
 * @returns {object} React element tree describing the component
 */

export default function ListItem({content, classNames, ...props}) {
  return (
    <li className={`list-item ${addClassNames(classNames)}`} {...props}>
      <span className="list-text">{content}</span>
    </li>
  );
}

ListItem.propTypes = {
  content: PropTypes.any,
  classNames: PropTypes.arrayOf(PropTypes.string)
};

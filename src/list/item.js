import React from 'react';
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
      {content}
    </li>
  );
}

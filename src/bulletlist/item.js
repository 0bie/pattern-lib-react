import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * Bulletlist item
 * @param {any} content - The item content
 * @param {array} classNames - Additional Classnames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function BulletItem({content, classNames, ...props}) {
  return (
    <li className={`bulletlist-item ${addClassNames(classNames)}`} {...props}>
      <span className="bulletlist-text">{content}</span>
    </li>
  );
}

BulletItem.propTypes = {
  content: PropTypes.any,
  classNames: PropTypes.arrayOf(PropTypes.string)
};

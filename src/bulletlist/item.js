import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * Bulletlist item
 * @param {any} text - The item content
 * @param {array} classNames - Additional Classnames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function BulletItem({content, classNames, ...props}) {
  return (
    <li className={`bulletlist-item ${addClassNames(classNames)}`} {...props}>
      {content}
    </li>
  );
}

BulletItem.propTypes = {
  text: PropTypes.any,
  classNames: PropTypes.arrayOf(PropTypes.string)
};

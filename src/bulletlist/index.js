import React from 'react';
import PropTypes from 'prop-types';
import BulletItem from './item';
import {addClassNames} from '../utils';

/**
 * Bulletlist
 * @param {array} items - The bulletlist items
 * @param {array} classNames - Additional classNames (Optional)
 * @param {array} children - Collection of react components (`BulletItem`)
 * @returns {object} React element tree describing the component
 */

export default function Bulletlist({items, classNames, children, ...props}) {
  return (
    <ul className={`bulletlist ${addClassNames(classNames)}`} {...props}>
      {children || items.map(({id, content, classNames}) =>
        <BulletItem
          key={id}
          content={content}
          classNames={classNames}
        />)}
    </ul>
  );
}

Bulletlist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  classNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.element)
};

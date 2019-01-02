import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './item.js';
import {getShape, addClassNames} from '../utils';

/**
 * List
 * @param {array} items - The list items
 * @param {array} children - Collection of React elements
 * @param {array} classNames - Additional Class names (Optional)
 * @returns {object} React element tree describing the component
 */

export default function List({items, children, classNames, rounded, ...props}) {
  return (
    <ul className={`list ${addClassNames(classNames)} ${getShape(rounded)}`} {...props}>
      {children || items && items.map(({id, content, classNames}) =>
        <ListItem
          key={id}
          content={content}
          classNames={classNames}
        />
      )}
    </ul>
  );
}

List.propTypes = {
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.element),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};

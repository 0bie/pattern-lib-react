import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';
import {renderItems} from './utils';

/**
 * Data tree
 * @param {array} items - The data tree items
 * @param {array} children - Collection of React elements
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function DataTree({items, classNames, children, ...props}) {
  return (
    <div className={`datatree ${addClassNames(classNames)}`} {...props}>
      <ul className="datatree-list">{children || renderItems(items)}</ul>
    </div>
  );
}

DataTree.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.element),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    item: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array
    ])
  }))
};

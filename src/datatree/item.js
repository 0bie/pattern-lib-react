import React from 'react';
import PropTypes from 'prop-types';
import {renderSubItems} from './utils';

/**
 * Data tree item
 * @param {string} title - The item title
 * @param {string|number|array} item - A sub-item
 * @returns {object} React element tree describing the component
 */

export default function DataTreeItem({title, item, ...props}) {
  return (
    <li className="datatree-item" {...props}>
      <span className="datatree-title">{title}</span>
      {item && <ul className="datatree-sublist">{renderSubItems(item)}</ul>}
    </li>
  );
}

DataTreeItem.propTypes = {
  title: PropTypes.string,
  item: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array
  ])
};

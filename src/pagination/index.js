import React from 'react';
import PropTypes from 'prop-types';
import PaginationItem from './item';
import {getShape, addClassNames} from '../utils';

/**
 * Pagination
 * @param {array} items - The pagination items
 * @param {boolean} rounded - The pagination shape
 * @param {array} classNames - Additional classNames
 * @returns {object} React element tree describing the component
 */

export default function Pagination({items, rounded, classNames, children, ...props}) {
  return (
    <nav className={`pagination cf ${getShape(rounded, 'pagination')} ${addClassNames(classNames)}`} {...props}>
      <div className="pagination-wrap">
        <span className="pagination-ctrls">
          <a className="pagination-item--disabled">
            <span className="chevron">‹</span>
            <span>Prev</span>
          </a>
          <a>
            <span>Next</span>
            <span className="chevron">›</span>
          </a>
        </span>
      </div>
      <ul className="pagination-list">
        {children || items.map(({id, link, number, classNames}) =>
          <PaginationItem
            key={id}
            link={link}
            number={number}
            classNames={classNames}
          />
        )}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    link: PropTypes.string,
    number: PropTypes.any,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};

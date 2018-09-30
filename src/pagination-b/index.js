import React from 'react';
import PropTypes from 'prop-types';
import PaginationItem from './item';
import {getShape, addClassNames} from '../utils';

/**
 * Render a pagination
 * @param {array} items - The pagination items
 * @param {boolean} rounded - The pagination shape
 * @param {array} classNames - Additional classNames
 * @returns {object} React element tree describing the component
 */

export default function PaginationB({items, rounded, classNames, ...props}) {
  return (
    <nav className={`pagination cf ${getShape(rounded, 'pagination')} ${addClassNames(classNames)}`} {...props}>
      <ul className="pagination-list pagination-b-list">
        <li className="pagination-item pagination-b-item">
          <a href="#" className="pagination-link pagination-item--disabled">
            <span className="chevron vert--mid">‹</span>
            <span className="pagination-b-ctrls">Prev</span>
          </a>
        </li>
        {items.map(({id, link, number, classNames}) =>
          <PaginationItem
            key={id}
            link={link}
            number={number}
            classNames={classNames}
          />
        )}
        <li className="pagination-item pagination-b-item">
          <a href="#" className="pagination-link">
            <span className="pagination-b-ctrls">Next</span>
            <span className="chevron vert--mid">›</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

PaginationB.propTypes = {
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    link: PropTypes.string,
    number: PropTypes.any,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};

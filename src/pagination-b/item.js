import React from 'react';
import PropTypes from 'prop-types';
import {addClassNames} from '../utils';

/**
 * Render a pagination item
 * @param {number} number - The pagination number
 * @param {string} link - The item link
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function PaginationItem({link, number, classNames}) {
  return (
    <li className={`pagination-item pagination-b-item ${addClassNames(classNames)}`}>
      <a href={link} className="pagination-link">{number}</a>
    </li>
  );
}

PaginationItem.propTypes = {
  link: PropTypes.string,
  number: PropTypes.any,
  classNames: PropTypes.arrayOf(PropTypes.string)
};

import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
/**
 * Pagination item
 * @param {number} number - The pagination number
 * @param {string} link - The item link
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function PaginationItem(_ref) {
  var number = _ref.number,
      link = _ref.link,
      classNames = _ref.classNames;
  return React.createElement("li", {
    className: "pagination-item ".concat(addClassNames(classNames))
  }, React.createElement("a", {
    href: link,
    className: "pagination-link"
  }, number));
}
PaginationItem.propTypes = {
  link: PropTypes.string,
  number: PropTypes.any,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
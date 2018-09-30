import React from 'react';
import PropTypes from 'prop-types';
import { addClassNames } from '../utils';
/**
 * Render a pagination item
 * @param {number} number - The pagination number
 * @param {string} link - The item link
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

export default function PaginationItem(_ref) {
  var link = _ref.link,
      number = _ref.number,
      classNames = _ref.classNames;
  return React.createElement("li", {
    className: "pagination-item pagination-b-item ".concat(addClassNames(classNames))
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
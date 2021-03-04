import React from 'react';
/**
 * Render a quote
 * @param {string} quote - The quote
 * @param {number} maxLength - The character limit
 * @param {function} handler - The event callback
 * @returns {object} - Markup for quote content
 */

export function truncateQuote(quote, maxLength, handler) {
  if (!quote || typeof quote !== 'string') {
    throw new Error('truncateQuote method requires `quote` as a string');
  }

  return /*#__PURE__*/React.createElement("div", null, quote.length > maxLength ? quote.substr(0, maxLength) + '...' : quote, quote.length > maxLength && /*#__PURE__*/React.createElement("span", {
    onClick: handler,
    className: "blockquote-expand",
    title: "Read more",
    tabIndex: "0"
  }, "more"));
}
/**
 * Get a user's name
 * @param {string} firstName - The user's first name
 * @param {string} lastName - The user's last name
 * @returns {string} - The user's first or last name
 */

export function getName(firstName, lastName) {
  if (typeof firstName !== 'string' && typeof lastName !== 'string') {
    throw new Error('getName method requires `firstName` or `lastName` as a string');
  }

  var givenName = firstName ? firstName : '';
  var surname = lastName ? lastName : '';
  return givenName + ' ' + surname;
}
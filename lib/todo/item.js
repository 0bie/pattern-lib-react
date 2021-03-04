import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { addClassNames } from '../utils';
/**
 * Todo list item
 * @param {string} id - The item `id`
 * @param {string} content - The item content
 * @param {boolean} done - True if item is checked as completed
 * @param {array} classNames - Additional classNames (Optional)
 * @param {function} handleDelete - Callback handler for delete action
 * @returns {object} React element tree describing the component
 */

export default function TodoItem(_ref) {
  var id = _ref.id,
      content = _ref.content,
      done = _ref.done,
      classNames = _ref.classNames,
      handleDelete = _ref.handleDelete;
  return /*#__PURE__*/React.createElement("li", {
    id: "todo-item-".concat(id),
    className: "list-item todo-item ".concat(addClassNames(classNames))
  }, /*#__PURE__*/React.createElement("input", {
    className: "text--sr",
    type: "checkbox",
    id: "todo-check-".concat(id),
    name: "todo-check-".concat(id),
    defaultChecked: done
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "todo-check-".concat(id),
    className: "todo-label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "todo-check",
    title: "Complete Task",
    tabIndex: "0"
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "sm",
    id: "check",
    fill: "#27ae60",
    title: "complete item",
    classNames: ['vert--mid']
  })), /*#__PURE__*/React.createElement("span", {
    className: "todo-text"
  }, content)), /*#__PURE__*/React.createElement("button", {
    tabIndex: "0",
    type: "button",
    onClick: handleDelete,
    onKeyPress: handleDelete,
    className: "btn btn--xs btn--todo"
  }, /*#__PURE__*/React.createElement(Icon, {
    id: "trash",
    title: "Delete todo item",
    classNames: ['vert--mid']
  })));
}
TodoItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  content: PropTypes.string,
  done: PropTypes.bool,
  handleDelete: PropTypes.func,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
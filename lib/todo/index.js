function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Input from '../input';
import TodoItem from './item';
import { getShape, addClassNames } from '../utils';
/**
 * Todo list
 * @param {string} title - The list title
 * @param {array} items - The todo items
 * @param {boolean} rounded - The list shape (Optional)
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

var Todo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Todo, _React$Component);

  function Todo(props) {
    var _this;

    _classCallCheck(this, Todo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Todo).call(this, props));
    _this.state = {
      items: _this.props.items
    };

    _this.addItem = function (evt) {
      evt.preventDefault();
      var form = _this.form.current;
      var input = form.querySelector('.input--todo');

      if (input.value !== '') {
        var newItem = {
          id: Date.now(),
          content: input.value,
          done: false
        };

        _this.setState(function (prevState) {
          return {
            items: prevState.items.concat(newItem)
          };
        });
      }

      input.value = '';
    };

    _this.deleteTodo = function (id, evt) {
      var key = evt.keyCode || evt.which;
      if (evt.type === 'keypress' && key !== 13) return null;

      var filteredItems = _this.state.items.filter(function (item) {
        return item.id !== id;
      });

      _this.setState(function () {
        return {
          items: filteredItems
        };
      });
    };

    _this.form = React.createRef();
    return _this;
  }

  _createClass(Todo, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var initItems = this.state.items;
      var _this$props = this.props,
          title = _this$props.title,
          rounded = _this$props.rounded,
          classNames = _this$props.classNames;
      return React.createElement("div", {
        className: "todo-container ".concat(addClassNames(classNames), " ").concat(getShape(rounded))
      }, React.createElement("header", {
        className: "todo-header"
      }, React.createElement("h1", {
        className: "todo-title"
      }, title), React.createElement("form", {
        id: "todo-form",
        className: "todo-form",
        onSubmit: this.addItem,
        ref: this.form
      }, React.createElement(Input, {
        size: "xs",
        inputId: "todo-input",
        id: "todo-input-container",
        placeholder: "Add a task...",
        inputClassNames: ['input--todo', 'input--full', getShape(rounded)]
      }), React.createElement(Button, {
        tabIndex: "0",
        type: "submit",
        label: "Add",
        iconPosition: "left",
        className: "btn btn--xs btn--todo ".concat(getShape(rounded)),
        icon: {
          id: 'plus',
          size: 'sm',
          title: 'add a task',
          classNames: ['mr--xs']
        }
      }))), React.createElement("ul", {
        id: "todo-list",
        className: "list todo-list ".concat(getShape(rounded, 'todo'))
      }, !initItems.length && React.createElement("p", null, "There are currently no tasks."), initItems.map(function (_ref) {
        var id = _ref.id,
            content = _ref.content,
            done = _ref.done,
            classNames = _ref.classNames;
        return React.createElement(TodoItem, {
          id: id,
          key: id,
          done: done,
          content: content,
          classNames: classNames,
          handleDelete: _this2.deleteTodo.bind(null, id)
        });
      })));
    }
  }]);

  return Todo;
}(React.Component);

export { Todo as default };
Todo.propTypes = {
  title: PropTypes.string,
  rounded: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    done: PropTypes.bool,
    content: PropTypes.string,
    handleDelete: PropTypes.func,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};
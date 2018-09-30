function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import Icon from '../icon';
import DropdownItem from './item';
import { getShape, addClassNames, debounce } from '../utils';
import { dropdownPositionHandler, getActiveClassName } from './utils';
/**
 * Dropdown
 * @param {string} id - The dropdown `id`
 * @param {string} label - The dropdown label
 * @param {object} labelIcon - A toggle icon (Optional)
 * @param {array} items - The dropdown items
 * @param {object} content - React element (Optional)
 * @param {array} classNames - Additional classnames (Optional)
 * @param {array} wrapClassNames- Additional classnames (Optional)
 * @param {boolean} rounded - The dropdown shape (Optional)
 * @returns {object} React element tree describing the component
 */

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      isActive: false
    };
    _this.dropdownPositions = {
      top: 'dropdown-list--top',
      left: 'dropdown-list--left',
      right: 'dropdown-list--right',
      bottom: 'dropdown-list--bottom'
    };

    _this.handleToggle = function (evt) {
      var key = evt.keyCode || evt.which;
      var container = _this.wrap.current;
      if (evt.type === 'keyUp' && key !== 13) return null;
      if (evt.type === 'keyUp' && key === 13) evt.preventDefault();
      dropdownPositionHandler(container, _this.dropdownPositions);

      _this.setState(function (prevState) {
        return {
          isActive: !prevState.isActive
        };
      });
    };

    _this.handleResize = function (container, classNames) {
      window.addEventListener('resize', debounce(handler, 250));

      function handler() {
        dropdownPositionHandler(container, classNames);
      }
    };

    _this.toggleVisibilityHandler = function (evt) {
      var label = _this.label.current;
      var container = _this.parent.current;
      var toggleInitiated = evt.target !== label && !container.contains(evt.target);

      if (toggleInitiated) {
        _this.setState(function () {
          return {
            isActive: false
          };
        });
      }
    };

    _this.label = React.createRef();
    _this.wrap = React.createRef();
    _this.parent = React.createRef();
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var container = this.wrap.current;
      this.handleResize(container, this.dropdownPositions);
      document.addEventListener('mousedown', this.toggleVisibilityHandler);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.toggleVisibilityHandler);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          labelIcon = _this$props.labelIcon,
          items = _this$props.items,
          content = _this$props.content,
          rounded = _this$props.rounded,
          classNames = _this$props.classNames,
          wrapClassNames = _this$props.wrapClassNames,
          props = _objectWithoutProperties(_this$props, ["id", "label", "labelIcon", "items", "content", "rounded", "classNames", "wrapClassNames"]);

      var isActive = this.state.isActive;
      return React.createElement("div", _extends({
        id: id,
        className: "dropdown-container ".concat(addClassNames(classNames), " ").concat(getShape(rounded, 'dropdown'), " ").concat(getActiveClassName(isActive))
      }, props, {
        ref: this.parent
      }), React.createElement("span", {
        tabIndex: "0",
        ref: this.label,
        id: "".concat(id, "-target"),
        className: "dropdown-label",
        "aria-expanded": isActive,
        "aria-controls": "".concat(id, "-list"),
        onClick: this.handleToggle,
        onKeyUp: this.handleToggle
      }, label && label, labelIcon && React.createElement("button", {
        type: "button",
        className: "btn"
      }, React.createElement(Icon, labelIcon))), React.createElement("div", {
        className: "dropdown-wrap ".concat(addClassNames(wrapClassNames)),
        ref: this.wrap
      }, content || React.createElement("ul", {
        id: "".concat(id, "-list"),
        className: "dropdown-list",
        "aria-live": "off"
      }, items.map(function (_ref) {
        var id = _ref.id,
            label = _ref.label,
            icon = _ref.icon,
            iconPosition = _ref.iconPosition;
        return React.createElement(DropdownItem, {
          key: id,
          label: label,
          icon: icon,
          iconPosition: iconPosition
        });
      }))));
    }
  }]);

  return Dropdown;
}(React.Component);

export { Dropdown as default };
Dropdown.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  labelIcon: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  }),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.object,
    iconPosition: PropTypes.oneOf(['left', 'right'])
  })),
  content: PropTypes.any
};
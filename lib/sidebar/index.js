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
import SidebarItem from './item';
import { addClassNames } from '../utils';
import { getActiveClassName } from './utils';
/**
 * Sidebar
 * @param {string} id - The sidebar `id`
 * @param {array} items - The sidebar items
 * @param {string} label - The sidebar button label
 * @param {array} classNames - Additional classNames (Optional)
 * @param {string} sidebarPosition - The sidebar position (left|right|top|bottom)
 * @returns {object} React element tree describing the component
 */

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Sidebar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isActive: false
    };

    _this.handleToggle = function (evt) {
      var key = evt.keyCode || evt.which;
      if (evt.type === 'keypress' && key !== 13) return null;

      _this.setState(function (prevState) {
        return {
          isActive: !prevState.isActive
        };
      });
    };

    return _this;
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      var isActive = this.state.isActive;

      var _this$props = this.props,
          id = _this$props.id,
          items = _this$props.items,
          label = _this$props.label,
          _this$props$position = _this$props.position,
          position = _this$props$position === void 0 ? 'left' : _this$props$position,
          classNames = _this$props.classNames,
          props = _objectWithoutProperties(_this$props, ["id", "items", "label", "position", "classNames"]);

      return React.createElement("nav", _extends({
        id: id,
        className: addClassNames(classNames)
      }, props), React.createElement("ul", {
        className: "sidebar sidebar--".concat(position, " ").concat(getActiveClassName(isActive))
      }, items.map(function (_ref) {
        var id = _ref.id,
            content = _ref.content,
            classNames = _ref.classNames;
        return React.createElement(SidebarItem, {
          key: id,
          content: content,
          classNames: classNames
        });
      })), React.createElement("div", null, React.createElement("a", {
        tabIndex: "0",
        onClick: this.handleToggle,
        onKeyPress: this.handleToggle,
        className: "btn btn--xs btn--full"
      }, label)));
    }
  }]);

  return Sidebar;
}(React.Component);

export { Sidebar as default };
Sidebar.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  position: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.element,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};
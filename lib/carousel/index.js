function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import { getShape, addClassNames } from '../utils';
/**
 * Render a carousel
 * @param {string} id - The carousel `id`
 * @param {boolean} rounded - The carousel shape
 * @param {array} classNames - Additional classnames (Optional)
 * @returns {object} - React element tree describing the component
 */

var Carousel = /*#__PURE__*/function (_Component) {
  _inherits(Carousel, _Component);

  var _super = _createSuper(Carousel);

  function Carousel() {
    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      activeItem: 1
    };

    _this.handleNextItem = function () {
      var maxItems = React.Children.count(_this.props.children);
      var activeItem = _this.state.activeItem;
      var nextItem = activeItem + 1;
      if (nextItem > maxItems) nextItem = 1;

      _this.setState(function () {
        return {
          activeItem: nextItem
        };
      });
    };

    _this.handlePrevItem = function () {
      var maxItems = React.Children.count(_this.props.children);
      var activeItem = _this.state.activeItem;
      var prevItem = activeItem - 1;
      if (prevItem < 1) prevItem = maxItems;

      _this.setState(function () {
        return {
          activeItem: prevItem
        };
      });
    };

    return _this;
  }

  _createClass(Carousel, [{
    key: "renderChildren",
    value: function renderChildren() {
      var children = this.props.children;
      var activeItem = this.state.activeItem;
      return React.Children.map(children, function (child, i) {
        return React.cloneElement(child, {
          isActive: i + 1 === activeItem
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          rounded = _this$props.rounded,
          classNames = _this$props.classNames,
          props = _objectWithoutProperties(_this$props, ["id", "rounded", "classNames"]);

      return /*#__PURE__*/React.createElement("div", _extends({
        id: id,
        className: "carousel-container ".concat(addClassNames(classNames))
      }, props), /*#__PURE__*/React.createElement("div", {
        className: "carousel ".concat(getShape(rounded, 'carousel'))
      }, /*#__PURE__*/React.createElement("ul", {
        className: "carousel-list"
      }, this.renderChildren())), /*#__PURE__*/React.createElement("div", {
        className: "carousel-controls"
      }, /*#__PURE__*/React.createElement(Button, {
        size: "md",
        tabIndex: "0",
        onClick: this.handlePrevItem,
        icon: {
          size: 'md',
          id: 'chevron-left',
          title: 'previous item',
          classNames: ['vert--mid']
        }
      }), /*#__PURE__*/React.createElement(Button, {
        size: "md",
        tabIndex: "0",
        onClick: this.handleNextItem,
        icon: {
          size: 'md',
          title: 'next item',
          id: 'chevron-right',
          classNames: ['vert--mid']
        }
      })));
    }
  }]);

  return Carousel;
}(Component);

export { Carousel as default };
Carousel.propTypes = {
  id: PropTypes.string,
  rounded: PropTypes.bool,
  children: PropTypes.any,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
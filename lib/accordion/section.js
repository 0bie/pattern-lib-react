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
import { addClassNames } from '../utils';
import PropTypes from 'prop-types';
import { getActiveClass } from './utils';
/**
 * Accordion section
 * @param {string} id - The section id
 * @param {string} title - The title
 * @param {object} children - React element
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing component
*/

var AccordionSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AccordionSection, _React$Component);

  function AccordionSection(props) {
    var _this;

    _classCallCheck(this, AccordionSection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AccordionSection).call(this, props));
    _this.state = {
      isActive: false
    };

    _this.handleToggle = function (evt) {
      var isActive = _this.state.isActive;
      var container = _this.container.current;
      var content = _this.content.current;
      var toggleInitiated = !isActive && container.clientHeight !== content.clientHeight;
      var key = evt.keyCode || evt.which;
      if (evt.type === 'keyup' && key !== 13) return null;

      _this.setState(function (prevState) {
        return {
          isActive: !prevState.isActive
        };
      });
      /**
       * Force the style mutation onto the task queue
       * 100ms delay required for transition between states
       */


      setTimeout(function () {
        container.setAttribute('style', "height: ".concat(toggleInitiated ? content.clientHeight + 'px' : 0));
      }, 100);
      container.style.height = content.clientHeight + 'px';
    };

    _this.handleTransitionEnd = function () {
      var container = _this.container.current;
      var content = _this.content.current;
      var contentIsOpen = container.style.height === content.clientHeight;
      var contentIsClosed = container.style.height < content.clientHeight || container.style.height === '0px';
      if (contentIsClosed) return false;
      if (!contentIsOpen && !contentIsClosed) container.style.height = 'auto';
    };

    _this.container = React.createRef();
    _this.content = React.createRef();
    return _this;
  }

  _createClass(AccordionSection, [{
    key: "render",
    value: function render() {
      var isActive = this.state.isActive;

      var _this$props = this.props,
          id = _this$props.id,
          title = _this$props.title,
          children = _this$props.children,
          classNames = _this$props.classNames,
          props = _objectWithoutProperties(_this$props, ["id", "title", "children", "classNames"]);

      return React.createElement("section", _extends({
        key: id,
        className: "accordion-section ".concat(getActiveClass(isActive), " ").concat(addClassNames(classNames))
      }, props), React.createElement("h3", {
        id: id,
        className: "accordion-title",
        tabIndex: isActive ? 0 : -1,
        onClick: this.handleToggle,
        onKeyUp: this.handleToggle
      }, React.createElement("span", {
        className: "title-text"
      }, title)), React.createElement("div", {
        className: "accordion-wrap",
        ref: this.container,
        onTransitionEnd: this.handleTransitionEnd
      }, React.createElement("div", {
        ref: this.content,
        "aria-labelledby": id,
        "aria-hidden": !isActive,
        className: "accordion-content"
      }, children)));
    }
  }]);

  return AccordionSection;
}(React.Component);

export { AccordionSection as default };
AccordionSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any,
  classNames: PropTypes.array
};
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

import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Button from '../button';
import { addClassNames } from '../utils';
/**
 * Cardlist item
 * @param {object} image - The image properties
 * @param {string} title - The item title
 * @param {string} subtitle - The item sub-title
 * @param {string} details - The item details
 * @param {function} handleCta - Callback function executed when cta is clicked
 * @param {array} classNames - Additional classNames
 * @returns {object} - React element tree describing the component
 */

var CardlistItem = /*#__PURE__*/function (_React$Component) {
  _inherits(CardlistItem, _React$Component);

  var _super = _createSuper(CardlistItem);

  function CardlistItem(props) {
    var _this;

    _classCallCheck(this, CardlistItem);

    _this = _super.call(this, props);
    _this.state = {
      isActive: false
    };

    _this.handleToggle = function (evt) {
      var toggleInitiated;
      var key = evt.keyCode || evt.which;
      var container = _this.container.current;
      var toggleButton = _this.toggleButton.current;
      var image = _this.image.current;
      var imageContainer = _this.imageContainer.current;
      var toggleIcon = toggleButton.querySelector('.icon--expand');
      var toggled = evt.target === toggleButton;
      if (evt.type === 'keyup' && key !== 13) return null;
      if (evt.type === 'keyup' && key === 13) evt.preventDefault();

      if (image.clientHeight) {
        toggleInitiated = container.contains(evt.target) && toggled;
      }

      if (toggleInitiated) {
        var imageIsExpanded = imageContainer.clientHeight >= image.clientHeight;
        toggleIcon.setAttribute('style', "transform: rotate(".concat(imageIsExpanded ? 0 : '0.12turn', ")"));
        /**
         * Force the style mutation onto the task queue
         * 100ms delay required for transition between states
         */

        setTimeout(function () {
          imageContainer.setAttribute('style', "height: ".concat(!imageIsExpanded ? image.clientHeight + 'px' : 0));
        }, 100);
        imageContainer.style.height = image.clientHeight + 'px';

        _this.setState(function (prevState) {
          return {
            isActive: !prevState.isActive
          };
        });
      }
    };

    _this.handleTransitionEnd = function () {
      var container = _this.container.current;
      var image = container.querySelector('img');
      var imageContainer = container.querySelector('.image-container');
      var contentIsOpen = imageContainer.style.height === image.clientHeight;
      var contentIsClosed = imageContainer.style.height < image.clientHeight || imageContainer.style.height === '0px';
      if (contentIsClosed) return false;
      if (!contentIsOpen && !contentIsClosed) imageContainer.style.height = 'auto';
    };

    _this.container = React.createRef();
    _this.image = React.createRef();
    _this.imageContainer = React.createRef();
    _this.toggleButton = React.createRef();
    return _this;
  }

  _createClass(CardlistItem, [{
    key: "render",
    value: function render() {
      var isActive = this.state.isActive;

      var _this$props = this.props,
          image = _this$props.image,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          details = _this$props.details,
          handleCta = _this$props.handleCta,
          classNames = _this$props.classNames,
          props = _objectWithoutProperties(_this$props, ["image", "title", "subtitle", "details", "handleCta", "classNames"]);

      return /*#__PURE__*/React.createElement("li", _extends({
        ref: this.container,
        className: "cardlist-item ".concat(addClassNames(classNames))
      }, props), /*#__PURE__*/React.createElement("div", {
        className: "cardlist-content"
      }, /*#__PURE__*/React.createElement("a", {
        className: "cardlist-overlay",
        href: "#"
      }), /*#__PURE__*/React.createElement("div", {
        ref: this.imageContainer,
        className: "image-container",
        onTransitionEnd: this.handleTransitionEnd
      }, /*#__PURE__*/React.createElement("div", {
        className: "media-placeholder"
      }), /*#__PURE__*/React.createElement("img", {
        src: image.src,
        alt: image.alt,
        ref: this.image
      })), /*#__PURE__*/React.createElement("div", {
        className: "cardlist-options"
      }, /*#__PURE__*/React.createElement(Button, {
        size: "xs",
        onClick: handleCta,
        icon: {
          size: 'md',
          id: 'heart',
          title: 'favorite',
          description: 'favorite this content'
        }
      }), /*#__PURE__*/React.createElement("a", {
        ref: this.toggleButton,
        title: "toggle card image",
        tabIndex: !isActive ? 0 : -1,
        onClick: this.handleToggle,
        onKeyUp: this.handleToggle,
        className: "btn btn--xs cardlist-expand"
      }, /*#__PURE__*/React.createElement(Icon, {
        size: "md",
        id: "plus",
        title: "toggle",
        classNames: ['icon--expand'],
        description: "hide/show content"
      })), /*#__PURE__*/React.createElement(Button, {
        size: "xs",
        onClick: handleCta,
        classNames: ['cardlist-share'],
        icon: {
          size: 'sm',
          id: 'share',
          title: 'share this content'
        }
      }), /*#__PURE__*/React.createElement(Button, {
        size: "xs",
        onClick: handleCta,
        icon: {
          size: 'sm',
          id: 'person',
          title: 'user avatar',
          description: 'the default user'
        }
      }))), /*#__PURE__*/React.createElement("div", {
        className: "cardlist-info"
      }, title ? /*#__PURE__*/React.createElement("h3", null, title) : null, subtitle ? /*#__PURE__*/React.createElement("h4", null, subtitle) : null, /*#__PURE__*/React.createElement("div", null, details)));
    }
  }]);

  return CardlistItem;
}(React.Component);

export { CardlistItem as default };
CardlistItem.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
    src: PropTypes.string
  }),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  details: PropTypes.string,
  handleCta: PropTypes.func,
  classNames: PropTypes.arrayOf(PropTypes.string)
};
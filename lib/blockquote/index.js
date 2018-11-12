function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

import React from 'react';
import PropTypes from 'prop-types';
import BlockquoteFooter from './footer';
import Icon from '../icon';
import { getShape, addClassNames } from '../utils';
import { truncateQuote } from './utils';
/**
 * Blockquote
 * @param {string} id - The blockquote `id`
 * @param {object} user - Blockquote author
 * @param {string} link - A direct URL to the quote (Optional)
 * @param {object} linkCta - Properties for cta icon
 * @param {number} maxLength - The character limit
 * @param {array} classNames - Additional classNames (Optional)
 * @param {boolean} footer - The blockquote footer (Optional)
 * @param {boolean} rounded - The blockquote shape (Optional)
 * @returns {object} - React element tree describing the component
 */

var Blockquote =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Blockquote, _React$Component);

  function Blockquote() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Blockquote);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Blockquote)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      quote: truncateQuote(_this.props.quote, _this.props.maxLength, _this.expandQuoteHandler.bind(_assertThisInitialized(_assertThisInitialized(_this))))
    };
    return _this;
  }

  _createClass(Blockquote, [{
    key: "expandQuoteHandler",
    value: function expandQuoteHandler() {
      var _this2 = this;

      this.setState(function () {
        return {
          quote: _this2.props.quote
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var quote = this.state.quote;
      var _this$props = this.props,
          id = _this$props.id,
          user = _this$props.user,
          link = _this$props.link,
          linkCta = _this$props.linkCta,
          footer = _this$props.footer,
          rounded = _this$props.rounded,
          classNames = _this$props.classNames;
      return React.createElement("div", {
        id: id,
        className: "blockquote-container ".concat(getShape(rounded), " ").concat(addClassNames(classNames))
      }, React.createElement("div", {
        className: "blockquote-icon"
      }, React.createElement(Icon, {
        size: "sm",
        title: "quotation mark",
        description: "quotation mark",
        id: "double-quote-serif-left"
      })), React.createElement("blockquote", {
        className: "blockquote",
        cite: link
      }, React.createElement("div", {
        className: "blockquote-content"
      }, quote)), footer && React.createElement(BlockquoteFooter, {
        user: user,
        link: link,
        linkCta: linkCta
      }));
    }
  }]);

  return Blockquote;
}(React.Component);

export { Blockquote as default };
Blockquote.propTypes = {
  id: PropTypes.string,
  footer: PropTypes.bool,
  rounded: PropTypes.bool,
  maxLength: PropTypes.number,
  quote: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  linkCta: PropTypes.object,
  link: PropTypes.string,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.object,
    quote: PropTypes.string
  })
};
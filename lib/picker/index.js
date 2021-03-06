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
import PickerItem from './item';
import PickerGroup from './group';
import Button from '../button';
import Input from '../input';
import { getShape, addClassNames, preventOuterScroll } from '../utils';
/**
 * Picker
 * @param {string} id - The picker `id`
 * @param {string} title - The picker title
 * @param {array} items - The picker items
 * @param {array} groups - The picker groups (Optional)
 * @param {string} subtitle - The picker subtitle
 * @param {boolean} rounded - The picker shape (Optional)
 * @param {function} handleClose - Callback function executed when closed
 * @param {boolean} preventClose - True if user can't dismiss
 * @param {array} classNames - Additional classNames (Optional)
 * @returns {object} React element tree describing the component
 */

var Picker = /*#__PURE__*/function (_React$Component) {
  _inherits(Picker, _React$Component);

  var _super = _createSuper(Picker);

  function Picker() {
    var _this;

    _classCallCheck(this, Picker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleScroll = function (evt) {
      preventOuterScroll(evt);
    };

    return _this;
  }

  _createClass(Picker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          items = _this$props.items,
          groups = _this$props.groups,
          rounded = _this$props.rounded,
          handleClose = _this$props.handleClose,
          preventClose = _this$props.preventClose,
          classNames = _this$props.classNames,
          props = _objectWithoutProperties(_this$props, ["id", "title", "subtitle", "items", "groups", "rounded", "handleClose", "preventClose", "classNames"]);

      return /*#__PURE__*/React.createElement("div", _extends({
        className: "picker ".concat(getShape(rounded), " ").concat(addClassNames(classNames))
      }, props), /*#__PURE__*/React.createElement("header", {
        className: "picker-header"
      }, /*#__PURE__*/React.createElement("div", {
        className: "picker-titlebar"
      }, /*#__PURE__*/React.createElement("h1", {
        className: "picker-title"
      }, title), !preventClose && /*#__PURE__*/React.createElement(Button, {
        size: "sm",
        classNames: ['btn--link'],
        onClick: handleClose,
        icon: {
          id: 'x1',
          size: 'sm',
          title: 'close',
          description: 'close picker modal'
        }
      })), /*#__PURE__*/React.createElement(Input, {
        size: "xs",
        id: "input_".concat(id),
        placeholder: "Type to filter...",
        inputClassNames: ['picker-searchbar']
      })), /*#__PURE__*/React.createElement("h3", {
        className: "picker-subtitle"
      }, subtitle), /*#__PURE__*/React.createElement("div", {
        id: id,
        className: "picker-content",
        onWheel: this.handleScroll
      }, items && !groups ? items.map(function (_ref) {
        var id = _ref.id,
            item = _ref.item,
            title = _ref.title,
            classNames = _ref.classNames;
        return /*#__PURE__*/React.createElement(PickerItem, {
          key: id,
          title: title,
          item: item,
          classNames: classNames
        });
      }) : null, groups && !items ? groups.map(function (_ref2) {
        var id = _ref2.id,
            title = _ref2.title,
            pickerArr = _ref2.pickerArr,
            classNames = _ref2.classNames;
        return /*#__PURE__*/React.createElement(PickerGroup, {
          key: id,
          title: title,
          pickerArr: pickerArr,
          classNames: classNames
        });
      }) : null));
    }
  }]);

  return Picker;
}(React.Component);

export { Picker as default };
Picker.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  rounded: PropTypes.bool,
  handleClose: PropTypes.func,
  preventClose: PropTypes.bool,
  classNames: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.element,
    title: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  })),
  groups: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    item: PropTypes.element,
    title: PropTypes.string,
    classNames: PropTypes.arrayOf(PropTypes.string)
  }))
};
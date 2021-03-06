function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputBlur", function (event) {
      var str = event.target.value;

      _this.setState({
        str: str
      });

      var _this$props = _this.props,
          format = _this$props.format,
          hourOptions = _this$props.hourOptions,
          minuteOptions = _this$props.minuteOptions,
          secondOptions = _this$props.secondOptions,
          disabledHours = _this$props.disabledHours,
          disabledMinutes = _this$props.disabledMinutes,
          disabledSeconds = _this$props.disabledSeconds,
          onChange = _this$props.onChange,
          allowEmpty = _this$props.allowEmpty;

      if (str) {
        var originalValue = _this.props.value;

        var value = _this.getProtoValue().clone();

        var newFormat = "";
        var inputValue = str.split(":");

        if (inputValue.length === 1) {
          if (inputValue[0].length === 1) {
            newFormat = "h";
          } else {
            newFormat = "HH";
          }
        } else if (inputValue.length === 2) {
          if (inputValue[0].length === 1) {
            if (inputValue[1].length === 1) {
              newFormat = "h:m";
            } else {
              newFormat = "h:mm";
            }
          } else {
            if (inputValue[1].length === 1) {
              newFormat = "HH:m";
            } else {
              newFormat = "HH:mm";
            }
          }
        } else {
          newFormat = format;
        }

        var parsed = moment(str, newFormat, true);

        if (!parsed.isValid()) {
          _this.setState({
            invalid: true
          });

          return;
        }

        value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second()); // if time value not allowed, response warning.

        if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
          _this.setState({
            invalid: true
          });

          return;
        } // if time value is disabled, response warning.


        var disabledHourOptions = disabledHours();
        var disabledMinuteOptions = disabledMinutes(value.hour());
        var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());

        if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
          _this.setState({
            invalid: true
          });

          return;
        }

        if (originalValue) {
          if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
            // keep other fields for rc-calendar
            var changedValue = originalValue.clone();
            changedValue.hour(value.hour());
            changedValue.minute(value.minute());
            changedValue.second(value.second());
            onChange(changedValue);
          }
        } else if (originalValue !== value) {
          onChange(value);
        }
      } else if (allowEmpty) {
        onChange(null);
      } else {
        _this.setState({
          invalid: true
        });

        return;
      }

      _this.setState({
        invalid: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputChange", function (event) {
      var str = event.target.value;

      _this.setState({
        str: str
      });

      var _this$props2 = _this.props,
          format = _this$props2.format,
          hourOptions = _this$props2.hourOptions,
          minuteOptions = _this$props2.minuteOptions,
          secondOptions = _this$props2.secondOptions,
          disabledHours = _this$props2.disabledHours,
          disabledMinutes = _this$props2.disabledMinutes,
          disabledSeconds = _this$props2.disabledSeconds,
          onChange = _this$props2.onChange,
          allowEmpty = _this$props2.allowEmpty;

      if (str) {
        var originalValue = _this.props.value;

        var value = _this.getProtoValue().clone();

        var parsed = moment(str, format, true);

        if (!parsed.isValid()) {
          _this.setState({
            invalid: true
          });

          return;
        }

        value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second()); // if time value not allowed, response warning.

        if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
          _this.setState({
            invalid: true
          });

          return;
        } // if time value is disabled, response warning.


        var disabledHourOptions = disabledHours();
        var disabledMinuteOptions = disabledMinutes(value.hour());
        var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());

        if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
          _this.setState({
            invalid: true
          });

          return;
        }

        if (originalValue) {
          if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
            // keep other fields for rc-calendar
            var changedValue = originalValue.clone();
            changedValue.hour(value.hour());
            changedValue.minute(value.minute());
            changedValue.second(value.second());
            onChange(changedValue);
          }
        } else if (originalValue !== value) {
          onChange(value);
        }
      } else if (allowEmpty) {
        onChange(null);
      } else {
        _this.setState({
          invalid: true
        });

        return;
      }

      _this.setState({
        invalid: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (e) {
      var _this$props3 = _this.props,
          onEsc = _this$props3.onEsc,
          onKeyDown = _this$props3.onKeyDown;

      if (e.keyCode === 27) {
        onEsc();
      }

      onKeyDown(e);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClear", function () {
      var onClear = _this.props.onClear;

      _this.setState({
        str: ""
      });

      onClear();
    });

    var _value = props.value,
        _format = props.format;
    _this.state = {
      str: _value && _value.format(_format) || "",
      invalid: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var focusOnOpen = this.props.focusOnOpen;

      if (focusOnOpen) {
        // Wait one frame for the panel to be positioned before focusing
        var requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
        requestAnimationFrame(function () {
          _this2.refInput.focus();

          _this2.refInput.select();
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = nextProps.value,
          format = nextProps.format;
      this.setState({
        str: value && value.format(format) || "",
        invalid: false
      });
    }
  }, {
    key: "getClearButton",
    value: function getClearButton() {
      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          allowEmpty = _this$props4.allowEmpty,
          clearIcon = _this$props4.clearIcon,
          clearText = _this$props4.clearText;

      if (!allowEmpty) {
        return null;
      }

      return React.createElement("a", {
        role: "button",
        className: "".concat(prefixCls, "-clear-btn"),
        title: clearText,
        onMouseDown: this.onClear,
        tabIndex: 0
      }, clearIcon || React.createElement("i", {
        className: "".concat(prefixCls, "-clear-btn-icon")
      }));
    }
  }, {
    key: "getProtoValue",
    value: function getProtoValue() {
      var _this$props5 = this.props,
          value = _this$props5.value,
          defaultOpenValue = _this$props5.defaultOpenValue;
      return value || defaultOpenValue;
    }
  }, {
    key: "getInput",
    value: function getInput() {
      var _this3 = this;

      var _this$props6 = this.props,
          prefixCls = _this$props6.prefixCls,
          placeholder = _this$props6.placeholder,
          inputReadOnly = _this$props6.inputReadOnly;
      var _this$state = this.state,
          invalid = _this$state.invalid,
          str = _this$state.str;
      var invalidClass = invalid ? "".concat(prefixCls, "-input-invalid") : "";
      return React.createElement("input", {
        className: "".concat(prefixCls, "-input  ").concat(invalidClass),
        ref: function ref(_ref) {
          _this3.refInput = _ref;
        },
        onKeyDown: this.onKeyDown,
        value: str,
        placeholder: placeholder,
        onChange: this.onInputChange,
        onBlur: this.onInputBlur,
        readOnly: !!inputReadOnly
      });
    }
  }, {
    key: "render",
    value: function render() {
      var prefixCls = this.props.prefixCls;
      return React.createElement("div", {
        className: "".concat(prefixCls, "-input-wrap")
      }, this.getInput(), this.getClearButton());
    }
  }]);

  return Header;
}(Component);

_defineProperty(Header, "propTypes", {
  format: PropTypes.string,
  prefixCls: PropTypes.string,
  disabledDate: PropTypes.func,
  placeholder: PropTypes.string,
  clearText: PropTypes.string,
  value: PropTypes.object,
  inputReadOnly: PropTypes.bool,
  hourOptions: PropTypes.array,
  minuteOptions: PropTypes.array,
  secondOptions: PropTypes.array,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  disabledSeconds: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onEsc: PropTypes.func,
  allowEmpty: PropTypes.bool,
  defaultOpenValue: PropTypes.object,
  currentSelectPanel: PropTypes.string,
  focusOnOpen: PropTypes.bool,
  onKeyDown: PropTypes.func,
  clearIcon: PropTypes.node
});

_defineProperty(Header, "defaultProps", {
  inputReadOnly: false
});

export default Header;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Button = () => {
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => {
      console.log('chal jaa bhai');
    }
  }, "Click me");
};
var _default = exports.default = Button;
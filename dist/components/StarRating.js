"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StarRating;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
var _Star = require("./Star");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function StarRating() {
  const [selectedStars, setSelectedStars] = (0, _react.useState)(1);
  const [hoveredStars, setHoveredStars] = (0, _react.useState)(0);
  return /*#__PURE__*/_react.default.createElement("div", null, Array(5).fill(null).map((_, index) => /*#__PURE__*/_react.default.createElement("span", {
    key: index,
    onClick: () => setSelectedStars(index + 1),
    onMouseOver: () => setHoveredStars(index + 1),
    onMouseLeave: () => setHoveredStars(0)
  }, /*#__PURE__*/_react.default.createElement(_Star.Star, {
    isFilled: hoveredStars > 0 ? index < hoveredStars : index < selectedStars
  }))));
}
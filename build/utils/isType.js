"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(type, data) {
  return !!(data.constructor && data.constructor.name.toLowerCase() === type.toLowerCase());
};

exports["default"] = _default;
//# sourceMappingURL=isType.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _costumer = _interopRequireDefault(require("../models/costumer"));

var CostumersController = /*#__PURE__*/function () {
  function CostumersController() {
    (0, _classCallCheck2["default"])(this, CostumersController);
  }

  (0, _createClass2["default"])(CostumersController, [{
    key: "getAll",
    // Get all
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var docs;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _costumer["default"].find({});

              case 3:
                docs = _context.sent;
                return _context.abrupt("return", res.status(200).json(docs));

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", res.status(400).json({
                  error: _context.t0.message
                }));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function getAll(_x, _x2) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }() // Insert

  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var costumer, obj;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                costumer = new _costumer["default"]({
                  fullName: req.body.fullName,
                  email: req.body.email,
                  phone: req.body.phone,
                  address: req.body.address
                });
                _context2.next = 4;
                return (0, _costumer["default"])(costumer).save();

              case 4:
                obj = _context2.sent;
                return _context2.abrupt("return", res.json({
                  success: true,
                  msg: ' Costumer is Created successfully.'
                }));

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", res.status(400).json({
                  success: false,
                  msg: 'Costumer  Email already use'
                }));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      function create(_x3, _x4) {
        return _create.apply(this, arguments);
      }

      return create;
    }() // Get by id

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var obj;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _costumer["default"].findById({
                  _id: req.params.id
                });

              case 3:
                obj = _context3.sent;

                if (!obj) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", res.status(200).json(obj));

              case 8:
                return _context3.abrupt("return", res.status(404).json({
                  error: 'Costumer not found'
                }));

              case 9:
                ;
                _context3.next = 15;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](0);
                return _context3.abrupt("return", res.status(404).json({
                  error: _context3.t0.message
                }));

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 12]]);
      }));

      function get(_x5, _x6) {
        return _get.apply(this, arguments);
      }

      return get;
    }() // Update by id

  }, {
    key: "put",
    value: function () {
      var _put = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var costumer, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _costumer["default"].findById(req.params.id).exec();

              case 3:
                costumer = _context4.sent;
                costumer.set(req.body);
                _context4.next = 7;
                return costumer.save();

              case 7:
                result = _context4.sent;
                return _context4.abrupt("return", res.json({
                  success: true,
                  msg: ' User is Update successfully.'
                }));

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](0);
                return _context4.abrupt("return", res.status(404).json({
                  success: false,
                  msg: 'User does not exist!'
                }));

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 11]]);
      }));

      function put(_x7, _x8) {
        return _put.apply(this, arguments);
      }

      return put;
    }() // Delete by id

  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _costumer["default"].deleteOne({
                  _id: req.params.id
                }).exec();

              case 3:
                return _context5.abrupt("return", res.json({
                  success: true,
                  msg: ' User is Deleted successfully.'
                }));

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                return _context5.abrupt("return", res.status(400).json({
                  success: false,
                  msg: 'User does not exist!'
                }));

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 6]]);
      }));

      function _delete(_x9, _x10) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }]);
  return CostumersController;
}();

var _default = new CostumersController();

exports["default"] = _default;
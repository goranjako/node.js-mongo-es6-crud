"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setRoutes;

var _express = _interopRequireDefault(require("express"));

var _customers = _interopRequireDefault(require("./controllers/customers.controller"));

var _require = require('./config/validation'),
    validateCustomersBody = _require.validateCustomersBody,
    validate = _require.validate;

function setRoutes(app) {
  var router = _express["default"].Router();

  router.route('/costumer').post(validateCustomersBody(), validate, _customers["default"].create);
  router.route('/costumer').get(_customers["default"].getAll);
  router.route('/costumer/:id').get(_customers["default"].get);
  router.route('/costumer/:id').put(validateCustomersBody(), validate, _customers["default"].put);
  router.route('/costumer/:id')["delete"](_customers["default"]["delete"]);
  app.use('/', router);
}
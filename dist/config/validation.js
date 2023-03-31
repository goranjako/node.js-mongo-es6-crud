"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult,
    buildCheckFunction = _require.buildCheckFunction;

var validateCustomersBody = function validateCustomersBody() {
  return [body('fullName').exists().withMessage('fullName is required').isLength({
    min: 3
  }).withMessage('name must be greater than 3 letters'), body('email').exists().withMessage('email is required...!').isEmail().withMessage('Email is invalid'), body('phone').optional().isInt(), body('address').exists().withMessage('address is required...!')];
};

var validate = function validate(req, res, next) {
  var errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  var extractedErrors = [];
  errors.array().map(function (err) {
    return extractedErrors.push((0, _defineProperty2["default"])({}, err.param, err.msg));
  });
  return res.status(422).json({
    errors: extractedErrors
  });
};

module.exports = {
  validateCustomersBody: validateCustomersBody,
  validate: validate
};
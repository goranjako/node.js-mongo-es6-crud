"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var app = (0, _express["default"])();

_dotenv["default"].config(); //mongoose setup


var mongodbURI;

if (process.env.NODE_ENV === 'test') {
  mongodbURI = process.env.MONGODB_TEST_URI;
} else {
  mongodbURI = process.env.MONGODB_URI;
}

_mongoose["default"].Promise = global.Promise;

_mongoose["default"].set('useCreateIndex', true);

_mongoose["default"].set('useNewUrlParser', true);

_mongoose["default"].set('useFindAndModify', false);

_mongoose["default"].set('useUnifiedTopology', true);

_mongoose["default"].connect(mongodbURI).then(function (db) {
  console.log('Connected to MongoDB');
}); // enable cors


var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use((0, _cors["default"])(corsOption)); // view engine setup

app.set('views', _path["default"].join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public'))); // routes setup

(0, _routes["default"])(app); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
var port = process.env.PORT || 4000;
app.listen(port, function () {
  return console.log("server running on port ".concat(port, "..!!"));
});
var _default = app;
exports["default"] = _default;
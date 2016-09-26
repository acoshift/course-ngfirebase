'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var obj = {
  name: 'a',
  email: 'a@abc.com'
};

var newObj = _extends({}, obj, { // error ?
  id: 10
});
console.log(newObj);


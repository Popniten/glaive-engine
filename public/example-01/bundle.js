(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _glaiveCore = require('../../glaive-modules/glaive-core');

var _glaiveCore2 = _interopRequireDefault(_glaiveCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_glaiveCore2.default.setup();

},{"../../glaive-modules/glaive-core":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  setup: function setup() {
    var ctx = document.querySelector('#game').getContext('2d');

    // 16:9
    ctx.canvas.width = 640;
    ctx.canvas.height = 360;

    // 16:10
    // ctx.canvas.width = 640;
    // ctx.canvas.height = 400;

    var greenBox = new Image();

    greenBox.src = '/assets/green-box.png';

    greenBox.onload = function () {
      ctx.drawImage(greenBox, 100, 100);
    };

    ctx.beginPath();
    ctx.moveTo(115, 115);
    ctx.lineTo(150, 150);

    ctx.stroke();
  }
};

},{}]},{},[1]);

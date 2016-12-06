(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const boink = require("../boink-modules/boink-core");

boink.addCanvas();

},{"../boink-modules/boink-core":2}],2:[function(require,module,exports){
module.exports = (function() {
    console.log("test");

    const canvas = document.createElement("canvas");

    canvas.setAttribute("id", "mainGame");
    const ctx = canvas.getContext("2d");

    // 16:9
    ctx.canvas.width = 640;
    ctx.canvas.height = 360;

    // 16:10
    // ctx.canvas.width = 640;
    // ctx.canvas.height = 400;

    let greenBox = new Image();

    greenBox.src = "assets/green-box.png";

    greenBox.onload = () => {
        ctx.drawImage(greenBox, 100, 100);
    };

    ctx.beginPath();
    ctx.moveTo(115, 115);
    ctx.lineTo(150, 150);

    ctx.stroke();

    let appendCanvasToBody = () => {
        document.body.appendChild(canvas);
    };

    return {
        addCanvas: appendCanvasToBody
    };
}());

},{}]},{},[1]);

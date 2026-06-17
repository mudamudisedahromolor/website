"use strict";

function handleKeyDown(evt) {
    var code = evt.keyCode || evt.which;

    if (code < 0 || code > 255)
        return;

    if (!Keyboard._keyStates[code].down)
        Keyboard._keyStates[code].pressed = true;

    Keyboard._keyStates[code].down = true;
}

function handleKeyUp(evt) {
    var code = evt.keyCode || evt.which;

    if (code < 0 || code > 255)
        return;

    Keyboard._keyStates[code].down = false;
}

function Keyboard_Singleton() {
    this._keyStates = [];

    for (var i = 0; i < 256; ++i)
        this._keyStates.push(new ButtonState());

    document.addEventListener("keydown", handleKeyDown, false);
    document.addEventListener("keyup", handleKeyUp, false);
}

Keyboard_Singleton.prototype.reset = function () {
    for (var i = 0; i < 256; ++i)
        this._keyStates[i].pressed = false;
};

Keyboard_Singleton.prototype.pressed = function (key) {
    if (!this._keyStates[key]) return false;
    return this._keyStates[key].pressed;
};

Keyboard_Singleton.prototype.down = function (key) {
    if (!this._keyStates[key]) return false;
    return this._keyStates[key].down;
};

var Keyboard = new Keyboard_Singleton();

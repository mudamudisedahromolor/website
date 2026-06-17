"use strict";

function getPointerPagePosition(evt) {
    // Mouse event biasa
    if (typeof evt.pageX !== "undefined" && typeof evt.pageY !== "undefined") {
        return {
            pageX: evt.pageX,
            pageY: evt.pageY
        };
    }

    // Fallback untuk touch event lama
    var touch = null;

    if (evt.touches && evt.touches.length > 0) {
        touch = evt.touches[0];
    } else if (evt.changedTouches && evt.changedTouches.length > 0) {
        touch = evt.changedTouches[0];
    }

    if (touch) {
        return {
            pageX: touch.pageX,
            pageY: touch.pageY
        };
    }

    return {
        pageX: 0,
        pageY: 0
    };
}

function updateMousePosition(evt) {
    if (!Canvas2D || !Canvas2D._canvas) {
        return;
    }

    if (Canvas2D.updateOffset) {
        Canvas2D.updateOffset();
    }

    var canvasScale = Canvas2D.scale;
    var canvasOffset = Canvas2D.offset;
    var pointer = getPointerPagePosition(evt);

    var mx = (pointer.pageX - canvasOffset.x) / canvasScale.x;
    var my = (pointer.pageY - canvasOffset.y) / canvasScale.y;

    Mouse._position = new Vector2(mx, my);
}

function setLeftDown(evt) {
    updateMousePosition(evt);

    if (!Mouse._left.down) {
        Mouse._left.pressed = true;
    }

    Mouse._left.down = true;
}

function setLeftUp(evt) {
    updateMousePosition(evt);
    Mouse._left.down = false;
}

function handleMouseMove(evt) {
    updateMousePosition(evt);
}

function handleMouseDown(evt) {
    updateMousePosition(evt);

    var button = typeof evt.which !== "undefined" ? evt.which : evt.button + 1;

    if (button === 1) {
        if (!Mouse._left.down) {
            Mouse._left.pressed = true;
        }
        Mouse._left.down = true;
    } else if (button === 2) {
        if (!Mouse._middle.down) {
            Mouse._middle.pressed = true;
        }
        Mouse._middle.down = true;
    } else if (button === 3) {
        if (!Mouse._right.down) {
            Mouse._right.pressed = true;
        }
        Mouse._right.down = true;
    }
}

function handleMouseUp(evt) {
    updateMousePosition(evt);

    var button = typeof evt.which !== "undefined" ? evt.which : evt.button + 1;

    if (button === 1) {
        Mouse._left.down = false;
    } else if (button === 2) {
        Mouse._middle.down = false;
    } else if (button === 3) {
        Mouse._right.down = false;
    }
}

function handlePointerMove(evt) {
    evt.preventDefault();
    updateMousePosition(evt);
}

function handlePointerDown(evt) {
    evt.preventDefault();

    updateMousePosition(evt);

    // Touch/pen selalu dianggap klik kiri.
    // Mouse tetap pakai tombol kiri.
    if (evt.pointerType === "touch" || evt.pointerType === "pen" || evt.button === 0) {
        setLeftDown(evt);
    }

    if (Canvas2D && Canvas2D._canvas && Canvas2D._canvas.setPointerCapture) {
        try {
            Canvas2D._canvas.setPointerCapture(evt.pointerId);
        } catch (e) {}
    }
}

function handlePointerUp(evt) {
    evt.preventDefault();
    setLeftUp(evt);
}

function handlePointerCancel(evt) {
    evt.preventDefault();
    Mouse._left.down = false;
}

function handleTouchMove(evt) {
    evt.preventDefault();
    updateMousePosition(evt);
}

function handleTouchStart(evt) {
    evt.preventDefault();
    setLeftDown(evt);
}

function handleTouchEnd(evt) {
    evt.preventDefault();
    setLeftUp(evt);
}

function Mouse_Singleton() {
    this._position = Vector2.zero;
    this._left = new ButtonState();
    this._middle = new ButtonState();
    this._right = new ButtonState();

    // Desktop fallback.
    document.addEventListener("mousemove", handleMouseMove, false);
    document.addEventListener("mousedown", handleMouseDown, false);
    document.addEventListener("mouseup", handleMouseUp, false);

    // Mobile modern.
    document.addEventListener("pointermove", handlePointerMove, { passive: false });
    document.addEventListener("pointerdown", handlePointerDown, { passive: false });
    document.addEventListener("pointerup", handlePointerUp, { passive: false });
    document.addEventListener("pointercancel", handlePointerCancel, { passive: false });

    // Fallback untuk browser lama.
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchstart", handleTouchStart, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: false });

    // Cegah menu klik kanan di canvas.
    document.addEventListener("contextmenu", function (evt) {
        evt.preventDefault();
    }, false);
}

Object.defineProperty(Mouse_Singleton.prototype, "left",
    {
        get: function () {
            return this._left;
        }
    });

Object.defineProperty(Mouse_Singleton.prototype, "middle",
    {
        get: function () {
            return this._middle;
        }
    });

Object.defineProperty(Mouse_Singleton.prototype, "right",
    {
        get: function () {
            return this._right;
        }
    });

Object.defineProperty(Mouse_Singleton.prototype, "position",
    {
        get: function () {
            return this._position;
        }
    });

Mouse_Singleton.prototype.reset = function () {
    this._left.pressed = false;
    this._middle.pressed = false;
    this._right.pressed = false;
};

Mouse_Singleton.prototype.containsMouseDown = function (rect) {
    return this._left.down && rect.contains(this._position);
};

Mouse_Singleton.prototype.containsMousePress = function (rect) {
    return this._left.pressed && rect.contains(this._position);
};

var Mouse = new Mouse_Singleton();

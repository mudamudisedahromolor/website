"use strict";

function Canvas2D_Singleton() {
    this._canvas = null;
    this._canvasContext = null;
    this._canvasOffset = Vector2.zero;
    this._div = null;
}

Object.defineProperty(Canvas2D_Singleton.prototype, "offset",
    {
        get: function () {
            return this._canvasOffset;
        }
    });

Object.defineProperty(Canvas2D_Singleton.prototype, "scale",
    {
        get: function () {
            return new Vector2(this._canvas.width / Game.size.x,
                this._canvas.height / Game.size.y);
        }
    });

Canvas2D_Singleton.prototype.initialize = function (divName, canvasName) {
    this._canvas = document.getElementById(canvasName);
    this._div = document.getElementById(divName);

    if (this._canvas.getContext)
        this._canvasContext = this._canvas.getContext('2d');
    else {
        alert('Your browser is not HTML5 compatible.!');
        return;
    }

    // Penting untuk HP: cegah browser melakukan scroll/zoom saat area game disentuh.
    this._canvas.style.touchAction = "none";
    this._div.style.touchAction = "none";
    this._canvas.style.msTouchAction = "none";
    this._div.style.msTouchAction = "none";

    var self = this;

    window.onresize = function () {
        self.resize();
    };

    window.addEventListener("orientationchange", function () {
        setTimeout(function () {
            self.resize();
        }, 300);
    });

    this.resize();
};

Canvas2D_Singleton.prototype.clear = function () {
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
};

Canvas2D_Singleton.prototype.resize = function () {
    var gameCanvas = Canvas2D._canvas;
    var gameArea = Canvas2D._div;

    if (!gameCanvas || !gameArea) return;

    var widthToHeight = Game.size.x / Game.size.y;

    // Lebih aman untuk mobile/iframe.
    var availableWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var availableHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    var newWidth = availableWidth;
    var newHeight = availableHeight;
    var newWidthToHeight = newWidth / newHeight;

    if (newWidthToHeight > widthToHeight) {
        newWidth = newHeight * widthToHeight;
    } else {
        newHeight = newWidth / widthToHeight;
    }

    gameArea.style.width = newWidth + 'px';
    gameArea.style.height = newHeight + 'px';

    gameArea.style.marginTop = Math.max(0, (availableHeight - newHeight) / 2) + 'px';
    gameArea.style.marginLeft = Math.max(0, (availableWidth - newWidth) / 2) + 'px';
    gameArea.style.marginBottom = Math.max(0, (availableHeight - newHeight) / 2) + 'px';
    gameArea.style.marginRight = Math.max(0, (availableWidth - newWidth) / 2) + 'px';

    gameCanvas.width = newWidth;
    gameCanvas.height = newHeight;

    Canvas2D.updateOffset();
};

Canvas2D_Singleton.prototype.updateOffset = function () {
    if (!this._canvas) return;

    // getBoundingClientRect lebih akurat di mobile, iframe, dan fullscreen.
    var rect = this._canvas.getBoundingClientRect();

    this._canvasOffset = new Vector2(
        rect.left + (window.pageXOffset || document.documentElement.scrollLeft || 0),
        rect.top + (window.pageYOffset || document.documentElement.scrollTop || 0)
    );
};

Canvas2D_Singleton.prototype.drawImage = function (sprite, position, rotation, scale, origin) {
    var canvasScale = this.scale;

    position = typeof position !== 'undefined' ? position : Vector2.zero;
    rotation = typeof rotation !== 'undefined' ? rotation : 0;
    scale = typeof scale !== 'undefined' ? scale : 1;
    origin = typeof origin !== 'undefined' ? origin : Vector2.zero;

    this._canvasContext.save();
    this._canvasContext.scale(canvasScale.x, canvasScale.y);
    this._canvasContext.translate(position.x, position.y);
    this._canvasContext.rotate(rotation);
    this._canvasContext.drawImage(sprite, 0, 0,
        sprite.width, sprite.height,
        -origin.x * scale, -origin.y * scale,
        sprite.width * scale, sprite.height * scale);
    this._canvasContext.restore();
};

Canvas2D_Singleton.prototype.drawText = function (text, position, origin, color, textAlign, fontname, fontsize) {
    var canvasScale = this.scale;

    position = typeof position !== 'undefined' ? position : Vector2.zero;
    origin = typeof origin !== 'undefined' ? origin : Vector2.zero;
    color = typeof color !== 'undefined' ? color : Color.black;
    textAlign = typeof textAlign !== 'undefined' ? textAlign : "top";
    fontname = typeof fontname !== 'undefined' ? fontname : "sans-serif";
    fontsize = typeof fontsize !== 'undefined' ? fontsize : "20px";

    this._canvasContext.save();
    this._canvasContext.scale(canvasScale.x, canvasScale.y);
    this._canvasContext.translate(position.x - origin.x, position.y - origin.y);
    this._canvasContext.textBaseline = 'top';
    this._canvasContext.font = fontsize + " " + fontname;
    this._canvasContext.fillStyle = color.toString();
    this._canvasContext.textAlign = textAlign;
    this._canvasContext.fillText(text, 0, 0);
    this._canvasContext.restore();
};

var Canvas2D = new Canvas2D_Singleton();

"use strict";

function Button(sprite, position, callback, hoverSprite){
    this.sprite = sprite;
    this.hoverSprite = hoverSprite ? hoverSprite : sprite;
    this.position = position;
    this.callback = callback;
}

Button.prototype.draw = function(){
    if(this.mouseInsideBorders()){
        Canvas2D.drawImage(this.hoverSprite, this.position, 0, 1);

        if (Canvas2D && Canvas2D._canvas) {
            Canvas2D._canvas.style.cursor = "pointer";
        }
    }
    else{
        Canvas2D.drawImage(this.sprite, this.position, 0, 0.98);
    }
};

Button.prototype.handleInput = function(){
    if((Mouse.left.pressed || Mouse.left.down) && this.mouseInsideBorders()){
        this.callback();

        // Supaya satu tap tidak memanggil callback berkali-kali.
        Mouse.reset();
        Mouse.left.down = false;
    }
};

Button.prototype.mouseInsideBorders = function(){
    var mousePos = Mouse.position;

    if(!this.sprite) {
        return false;
    }

    if(
        mousePos.x > this.position.x &&
        mousePos.x < this.position.x + this.sprite.width &&
        mousePos.y > this.position.y &&
        mousePos.y < this.position.y + this.sprite.height
    ){
        return true;
    }

    return false;
};

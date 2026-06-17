"use strict";

function Stick(position){
    this.position = position;
    this.origin = new Vector2(970,11);
    this.shotOrigin = new Vector2(950,11);
    this.shooting = false;
    this.visible = true;
    this.rotation = 0;
    this.power = 0;
    this.trackMouse = true;

    // Tambahan untuk mobile/touch.
    this.mobileCharging = false;
    this.mobileMaxPower = 75;
}

Stick.prototype.handleInput = function (delta) {

    if(AI_ON && Game.policy.turn === AI_PLAYER_NUM)
      return;

    if(Game.policy.turnPlayed)
      return;

    // Arah stik selalu mengikuti Mouse.position.
    // Setelah Mouse.js dipatch, Mouse.position juga akan mengikuti touch/jari.
    if(this.trackMouse){
      var opposite = Mouse.position.y - this.position.y;
      var adjacent = Mouse.position.x - this.position.x;
      this.rotation = Math.atan2(opposite, adjacent);
    }

    // Desktop keyboard: W untuk tambah power.
    if(Keyboard.down(Keys.W) && KEYBOARD_INPUT_ON){
      if(this.power < this.mobileMaxPower){
        this.origin.x += 2;
        this.power += 1.2;
      }
      return;
    }

    // Desktop keyboard: S untuk kurangi power.
    if(Keyboard.down(Keys.S) && KEYBOARD_INPUT_ON){
      if(this.power > 0){
        this.origin.x -= 2;
        this.power -= 1.2;
      }
      return;
    }

    // Mobile/mouse: tahan layar/klik untuk isi power.
    // Mouse.left.down akan aktif juga untuk touch setelah Mouse.js dipatch.
    if(Mouse.left.down && KEYBOARD_INPUT_ON){
      this.mobileCharging = true;

      if(this.power < this.mobileMaxPower){
        this.origin.x += 2;
        this.power += 1.2;
      }

      return;
    }

    // Mobile/mouse: saat jari/mouse dilepas, tembak.
    if(this.mobileCharging && !Mouse.left.down && this.power > 0){
      this.mobileCharging = false;
      this.shoot(this.power, this.rotation);
      return;
    }
};

Stick.prototype.shoot = function(power, rotation){
  this.power = power;
  this.rotation = rotation;

  if(Game.sound && SOUND_ON){
    var strike = sounds.strike.cloneNode(true);
    strike.volume = (this.power/(10))<1?(this.power/(10)):1;
    strike.play();
  }

  Game.policy.turnPlayed = true;
  this.shooting = true;
  this.origin = this.shotOrigin.copy();

  Game.gameWorld.whiteBall.shoot(this.power, this.rotation);

  var stick = this;
  setTimeout(function(){stick.visible = false;}, 500);
};

Stick.prototype.update = function(){
  if(this.shooting && !Game.gameWorld.whiteBall.moving)
    this.reset();
};

Stick.prototype.reset = function(){
  this.position.x = Game.gameWorld.whiteBall.position.x;
  this.position.y = Game.gameWorld.whiteBall.position.y;
  this.origin = new Vector2(970,11);
  this.shooting = false;
  this.visible = true;
  this.power = 0;
  this.mobileCharging = false;
};

Stick.prototype.draw = function () {
  if(!this.visible)
    return;

  Canvas2D.drawImage(sprites.stick, this.position, this.rotation, 1, this.origin);
};

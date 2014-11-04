function Princess(arena) {
  this.$arena = arena;
  this.x = this.$arena.width() / 2;
  this.y = this.$arena.height() / 2;
  this.dir = "sitting there like a fatass";
  this.speed = 5;
  this.height = 32;
  this.width = 32;
  this.initDisplay();
}

Princess.prototype.initDisplay = function() {
  this.$princess = $("<div id='princess'></div>")
  $('#arena').append(this.$princess);

  this.updateDisplay();
}

Princess.prototype.eatCake = function (cake,score) {
  if (Math.sqrt(Math.pow((this.x-cake.x),2)+Math.pow(this.y-cake.y,2)) < (cake.width+this.width)/2)
    {
    nomCake.play();
    cake.x = Math.random()*600;
    cake.y = Math.random()*600;
    this.fattenBooty();
    cake.updateCakeDisplay();
    score.pounds+=100;
    score.updateScore();
    console.log("cake eaten");
    }
  console.log("im eating cakes");
}

Princess.prototype.eatCarrot = function (carrot,score) {
  if (Math.sqrt(Math.pow((this.x-carrot.x),2)+Math.pow(this.y-carrot.y,2)) < (carrot.width+this.width)/2)
    {
    nomCarrot.play();
    carrot.x = Math.random()*600;
    carrot.y = Math.random()*600;
    this.skinnyBooty();
    score.pounds-=100;
    score.lives-=1;
    if (score.lives==0) {
      alert("My anaconda don't want none unless...");
    }
    score.updateScore();
    carrot.updateCarrotDisplay();
    }
}

Princess.prototype.fattenBooty = function () {
  this.height += 20;
  this.width += 20;
  $('#princess').css({height: this.height, width: this.width});
  this.updateDisplay();
}

Princess.prototype.skinnyBooty = function () {
  this.height -= 20;
  this.width -= 20;
  $('#princess').css({height: this.height, width: this.width});
  this.updateDisplay();
}

Princess.prototype.move = function() {
  old_x = this.x;
  old_y = this.y;
  switch (this.dir) {
    case 'right':
      this.x += this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'up':
      this.y -= this.speed;
      break;
    case 'down':
      this.y += this.speed;
      break;
  }
  if (! this.inBounds()) {
    this.x = old_x;
    this.y = old_y;
  }
  this.updateDisplay();
}

Princess.prototype.inBounds = function () {
  return (this.x > this.width / 2 && this.x < this.$arena.width() - this.width / 2 && this.y > this.height / 2 && this.y < this.$arena.height() - this.height / 2)
}

Princess.prototype.updateDisplay = function () {
  this.$princess.css('top', this.y - this.height / 2);
  this.$princess.css('left', this.x - this.width / 2);
}
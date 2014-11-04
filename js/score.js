function Score(scorebar) {
  this.$scorebar = scorebar;
  this.pounds = 200;
  this.lives = 3;
  this.scoreDisplay();
}

Score.prototype.scoreDisplay = function() {
  this.$score = $("<div id='score'>POUNDS: "+this.pounds+"<br>LIVES: "+this.lives+"</div>")
  $('#scorebar').append(this.$score);
}

Score.prototype.updateScore = function(){
  console.log(this.pounds);
  $('#score').html("<div id='score'>POUNDS: "+this.pounds+"<br>LIVES: "+this.lives+"</div>");
  // this.$score.css("<div id='score'>POUNDS: "+this.pounds+"<br>LIVES: "+this.lives+"</div>")
  // $('#scorebar').html(this.$score);
};
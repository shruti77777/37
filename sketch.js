var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;//allPlayer var is going to be an array in which we will be storing information about all our players that have logged in the game...so to store tht info we have created another func in player class which is getPlayerInfo()
var distance = 0;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

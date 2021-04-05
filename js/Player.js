//in the last class we were directly creaqting p1,2,3,4 in the database....now we want that all players shoud be created inside the players and we string cancatinate them with index property...when all the players re registerring we r storing the al in allPlayers
class Player {
  constructor(){
    this.index = null; 
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){ // generally when we crete functions in a class we call them by using object of the class however getplayerInfo function is a satic function because we want it to be called for every object of the player class because it is goin to update the details about the players in the all players array ....static function are called by the class name
    
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}

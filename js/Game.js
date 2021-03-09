class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car1.addImage("car1",car1img);
    car2 = createSprite(300,200);
    car2.addImage("car2",car2img);
    car3 = createSprite(500,200);
    car3.addImage("car3",car3img);
    car4 = createSprite(700,200);
    car4.addImage("car4",car4img);
    cars = [car1,car2,car3,car4];
  }
  play(){
    form.hide();
    Player.getPlayerInfo();

    if(allPlayers!==undefined){
      background("#8C6767");
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      var index = 0;
      var x = 0;
      var y;
      for(var plr in allPlayers){
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;

        if(index === player.index){
          cars[index - 1].shapeColor = "blue";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index - 1].y;
        }
      }
      }
    if (keyIsDown(UP_ARROW)&&player.index!==null){
      player.distance+=40;
      player.update();

    }
    drawSprites();
  }
}

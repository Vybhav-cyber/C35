class Game{

constructor(){




}

getState(){
var getStateref = database.ref("gameState");

getStateref.on("value", function(data){
    gameState = data.val();
})

}

update(State){
database.ref('/').update({
gameState:State
})


}

start(){
if(gameState === 0){
player = new Player();
player.getCount();
form = new Form();
form.display();


}

    
}











}
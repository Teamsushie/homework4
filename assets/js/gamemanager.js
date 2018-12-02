
let gameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
        
    },
    resetPlayer: function(classType){
        switch (classType){
            case 'Sora':
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
             case 'Aqua':
                player = new Player(classType, 100, 0, 100, 150, 200);
                break;
             case 'Riku':
                player = new Player(classType, 80, 0, 50, 200, 50);
                break;
             case 'Mickey':
                player = new Player(classType, 200, 0, 50, 200, 100);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="assets/images/avatar-player/' + classType.toLowerCase() + '.png" class= "img-avatar"><div><h3>' + classType + '</h3><p>Health: ' +player.health + '</p> <p>Mana: ' +player.mana + '</p> <p>Strength: ' +player.strength + '</p> <p>Agility: ' +player.agility + '</p> <p>Speed: ' +player.speed + '</p> </div>'
    },
    setPreFight:function(){
        let getHeader= document.querySelector(".header")
        let getActions= document.querySelector(".actions")
        let getArena= document.querySelector(".arena")
        getHeader.innerHTML = '<p>Task: Find an Enemy!</p>';
        getActions.innerHTML = '<a href ="#" class="btn-prefight" onclick ="gameManager.setFight()">Search for an Enemy</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader= document.querySelector(".header")
        let getActions= document.querySelector(".actions")
        let getEnemy= document.querySelector(".enemy")
        //creates an enemy!
        let Enemy00 = new Enemy("Heartless", 100, 0, 50, 100, 100);
        let Enemy01 = new Enemy("Heartless1", 200, 0, 100, 100, 100);
        let Enemy02 = new Enemy("HeartlessBoss", 300, 0, 150, 100, 100);
        let chooseRandomEnemy = Math.floor(Math.random() *Math.floor (3));
        console.log(chooseRandomEnemy);
        switch (chooseRandomEnemy) {
            case 0:
                Enemy=Enemy00;
                break;
            case 1:
                Enemy=Enemy01;
                break;
            case 2:
                Enemy=Enemy02;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move!</p>'
        getActions.innerHTML = '<a href ="#" class="btn-prefight" onclick ="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="assets/images/avatar-enemy/' + enemyType.toLowerCase() + '.png" alt= "img-avatar"><div><h3>' + enemyType + '</h3><p>Health: ' +enemy.health + '</p> <p>Mana: ' +enemy.mana + '</p> <p>Strength: ' +enemy.strength + '</p> <p>Agility: ' +enemy.agility + '</p> <p>Speed: ' +enemy.speed + '</p> </div>'
    }
}

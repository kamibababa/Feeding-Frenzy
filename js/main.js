
let score = 0;
let level = 1;
let lives = 3;
let foodTimer = 0;
let gameover = false;
let interval;
let backgroundSound;
let playerNumber;
let containerBoundingRect;
let fishEnemiesList = [];
let fishEntryPositions = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700];
let fishImages = [{ src: "shark.gif", weight: 1.7 }, { src: "gray_fish.gif", weight: 1.2 }, { src: "whiteFish.gif", weight: 0.8 }, { src: "yellowFish.gif", weight: 1.4 }];
let playedBefore1 = false;
let playedBefore2 = false;
let second = 0 ; 
let minutes = 0 ; 
let hours = 0 ; 

let fishPlayer = document.getElementById("fishPlayer");
let container = document.getElementById("container");
let eatSound = document.getElementById("eat");
let dyingSound = document.getElementById("die");
let levelUpSound = document.getElementById("level");
let underWaterSound = document.getElementById("underWater");
let sizeUpSound = document.getElementById("sizeUp");
let GOSound = document.getElementById("gameOverSound");
let gameOverDiv = document.getElementById("gameOver");
let scoreRecord = document.getElementById("score");
let levelRecord = document.getElementById("level");
let HScoreRecord = document.getElementById("HScore");
let scoreNumArr = document.getElementsByClassName('scoreNum');//4 images for score
let liveNumArr = document.getElementsByClassName('liveNum');//2 images for lives
let growthBarTotal = document.getElementById('growthBarTotal');// growth bar total div
let growthBarActual = document.getElementById('growthBarActual');// growth bar actual div
let charImg = document.getElementById('charImg');  // char img in live div
let levelNum = document.getElementById('levelNum'); //1 img for level number
let scoreDiv = document.getElementById('scoreDiv');
let growthDiv = document.getElementById('growthDiv');
let liveDiv = document.getElementById('liveDiv');
let levelDiv = document.getElementById('levelDiv');
let timeDiv = document.getElementById('timer');
let secondNumArr = document.getElementsByClassName('secondNum');
let minNumArr = document.getElementsByClassName('minNum');
let hourNumArr = document.getElementsByClassName('hourNum');

let setPlayerNumber = function (num) {
    playerNumber = num;
}

container.onmousemove = function (event) {

    containerBoundingRect = container.getBoundingClientRect();

    if (parseInt(fishPlayer.style.left) < event.clientX - containerBoundingRect.left) {
        fishPlayer.src = "./images/Characters/player" + playerNumber + "-right.gif"; // change right
    } else if (parseInt(fishPlayer.style.left) > event.clientX - containerBoundingRect.left) {
        fishPlayer.src = "./images/Characters/player" + playerNumber + "-left.gif"; // change left
    }

    fishPlayer.style.left = (event.clientX - containerBoundingRect.left) + 'px';
    fishPlayer.style.top = (event.clientY - containerBoundingRect.top) + 'px';


    if (event.clientX >= window.innerWidth - fishPlayer.width) {

        fishPlayer.style.left = window.innerWidth - fishPlayer.width + 'px';
    }

    if (event.clientY >= window.innerHeight - fishPlayer.height) {

        fishPlayer.style.top = window.innerHeight - containerBoundingRect.top - fishPlayer.height + 'px';
    }

};

document.onkeydown = function (event) {

    if (event.keyCode === 27)
        if (!confirm("Continue Playing ?"))
            location.reload();
};

let UpdateGameGrid = function () {

    CheckGameOver();
    createEnemyFishes();
    detectCollisionBetweenPlayerFishAndEnemyFishesV2();
    detectCollisionBetweenEnemyFishes();
    moveEnemyFishes();
    scoreAndLevel();
    adjustBoard(score, level, playerNumber, lives);

};

let startGame = function () {

    level = 1;
    lives = 3;
    score = 0 ; 
    second = minutes = hours = 0;
    fishPlayer.src = "./images/Characters/player" + playerNumber + "-right.gif";
    showLevelUpNotificationImage();
    interval = setInterval(UpdateGameGrid, 20);
    t = setInterval(timer,1000) ;

};

let CheckGameOver = function () {

    if (lives === 0) {
        localStorage.setObj(playerNa.value, score);
        displayGameOver();
        clearInterval(interval);
        clearInterval(t) ; 

    }

};

backgroundSound = setInterval(playUnderWaterSound, 10000);
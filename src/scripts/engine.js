const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeleft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {
        timerId: null,
        gameVelocity: 500,
    },
}


function randomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });
    let randaoNumber = Math.floor(Math.random()*9);
    let randaoSquare = state.view.squares[randaoNumber];
    randaoSquare.classList.add("enemy");
}
function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function addListenerHitBox(){
    state.view.squares.forEach((square) =>{});
}

//função para estartar algumas funções do jogo
function initialise(){
    moveEnemy();
}

initialise();
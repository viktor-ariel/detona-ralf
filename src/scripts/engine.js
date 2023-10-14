const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeleft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values: {
        gameVelocity: 500,
        hitPosition: 0,
        result:0,
        currentTime:30,
    },
    actions:{
        timerId: setInterval(randomSquare, 500),
        countDownTimerId: setInterval(countDown, 1000),
    },
}

function countDown(){
    state.values.currentTime--;
    state.view.timeleft.textContent = state.values.currentTime;
    if(state.values.currentTime <= 0 ){
        clearInterval(state.actions.timerId);
        clearInterval(state.actions.countDownTimerId);
        alert("Seu Tempo Acabou!! Você fez um total de " + state.values.result)
    }
}
function playSound(){
    let audio = new Audio("./src/audio/hit.m4a")
    audio.volume=0.2;
    audio.play()
}
function randomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    });
    let randaoNumber = Math.floor(Math.random()*9);
    let randaoSquare = state.view.squares[randaoNumber];
    randaoSquare.classList.add("enemy");
    state.values.hitPosition = randaoSquare.id;
}
function addListenerHitBox(){
    state.view.squares.forEach((square) =>{
        square.addEventListener("mousedown",()=>{
            if(square.id===state.values.hitPosition){
                
                state.values.result++;
                state.view.score.textContent = state.values.result 
                state.values.hitPosition= null;
                playSound();
            }
            
        });
    });
}
//função para estartar algumas funções do jogo
function initialise(){
    addListenerHitBox();
}
initialise();
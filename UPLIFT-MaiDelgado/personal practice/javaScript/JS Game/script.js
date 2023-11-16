const moves = document.getElementById("counter");
const timer= document.getElementById("timer");
const startButton = document.getElementById("startGame");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".gameContainer");
const start = document.getElementById("start");
const controls = document.querySelector(".controls-container");
const audio = new Audio('saranggolaMikeDamaso.mp3');
let cards;
let interval;
let firstCard = false;
let secondCard = false;

const items = [
    {name:"halohalo",image:"halohalo.jpg"},
    {name:"tryk",image:"tryk.png"},
    {name:"walis", image:"walis.png"},
    {name:"lechon", image:"lechon.png"},
    {name:"saranggola", image:"saranggola.jpeg"},
    {name:"kudkuran", image:"kudkuran.png"},
    {name:"kalabaw", image:"kalabaw.png"},
    {name:"kalesa", image:"kalesa.png"}
];

let seconds = 0,
    minutes = 0;

let movesCount = 0, 
    winCount = 0;

const timeGenerator = () => {
    seconds += 1;
    if(seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    timer.innerHTML = `<span>BILANG NG TIME: </span>${minutesValue}:${secondsValue}`;
};

const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>BILANG NG MOVES:</span>${movesCount}`;
};

const generateRandom = (size = 4) => {
    let tempArray = [...items];
    let cardValues = [];
    size = (size * size) /2;
    for(let i = 0; i< size;i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = "";
    cardValues = [...cardValues, ...cardValues];
    cardValues.sort(() => Math.random() - 0.5);
    for(let i=0; i<size*size;i++) {
        gameContainer.innerHTML += `
            <div class = "card-container" data-card-value="${cardValues[i].name}">
                <div class="card-before"></div>
                <div class="card-after">
                <img src="${cardValues[i].image}"
                class="image"/></div>
            </div>
            `;
    }
    gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

    cards = document.querySelectorAll(".card-container");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (!card.classList.contains("matched")) {
                card.classList.add("flipped");
                if (!firstCard) {
                    firstCard = card;
                    firstCardValue = card.getAttribute ("data-card-value");
                }
                else {
                    movesCounter();
                    secondCard = card;
                    let secondCardValue = card.getAttribute("data-card-value");
                    if(firstCardValue == secondCardValue){
                        firstCard.classList.add("matched");
                        secondCard.classList.add("matched");
                        firstCard = false;
                        winCount += 1;
                        if(winCount == Math.floor(cardValues.length/2)){
                            start.innerHTML = `<h2 id = "boom">Yey!🎊 🎉</h2>
                            <h2>Ating ipagdiwang ang iyong pagkapanalo!😊</h2>
                            <h4>Bilang ng moves: ${movesCount}</h4>`;
                            youWin();

                        }
                    }else{
                        let [tempFirst, tempSecond] = [firstCard,secondCard];
                        firstCard = false;
                        secondCard = false;
                        let delay = setTimeout(() => {
                            tempFirst.classList.remove("flipped");
                            tempSecond.classList.remove("flipped");
                        }, 900);
                    }
                }
            }            
        });
    });
};


startButton.addEventListener("click", () => {
    movesCount = 0;
    time = 0;
    controls.classList.add("hide");
    stopButton.classList.remove("hide");
    startButton.classList.add("hide");
    interval = setInterval(timeGenerator, 1000);
    moves.innerHTML = `<span>BILANG NG MOVES: </span> ${movesCount}`;
    initializer();
});

stopButton.addEventListener(
    "click", 
    (stopGame = () => {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);
})
);
const youWin = () => {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.add("hide");
    
    clearInterval(interval);
}

const initializer = () => {
    audio.play();
    start.innerHTML = `<div class = "intro">
    <h2>Masayang Araw!</h2>

    <p>Ang mga bagay na kasa-kasama natin sa ating paglaki, ay parte ng ating pagkatao at ng ating pagiging Pilipino.</p>

    <p>May mga bagay, na sadyang kahit saang lugar man tayo mapadpad, ay nakakapagbigay ng ngiti sa atin kapag sila ay ating naaalala o nakikitang muli.</p>

    <p>Bawat isa sa atin ay may kanya-kanyang kwento. Sana ay makapagbigay ngiti sa iyo ang munting larong ito.</p>
    </div>`;
    startGame.classList.remove("hide");
    winCount = 0;
    let cardValues = generateRandom();
    matrixGenerator(cardValues);
    audio.play();
};

initializer();


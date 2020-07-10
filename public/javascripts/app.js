const socket = io();

socket.on('flip-square', function(data) {
    flipSquare(data);
})

socket.on('reset', function() {
    document.getElementById("message").innerHTML = 'This button is supposed to reset the game, but for now you have to refresh the page';
});

let turnCounter = 1;

let square1 = document.getElementById("1-1");
let square2 = document.getElementById("1-2");
let square3 = document.getElementById("1-3");
let square4 = document.getElementById("1-4");
let square5 = document.getElementById("2-1");
let square6 = document.getElementById("2-2");
let square7 = document.getElementById("2-3");
let square8 = document.getElementById("2-4");
let square9 = document.getElementById("3-1");
let square10 = document.getElementById("3-2");
let square11= document.getElementById("3-3");
let square12 = document.getElementById("3-4");
let square13 = document.getElementById("4-1");
let square14 = document.getElementById("4-2");
let square15= document.getElementById("4-3");
let square16 = document.getElementById("4-4");


square1.addEventListener('click', checkFlip);
square2.addEventListener('click', checkFlip);
square3.addEventListener('click', checkFlip);
square4.addEventListener('click', checkFlip);
square5.addEventListener('click', checkFlip);
square6.addEventListener('click', checkFlip);
square7.addEventListener('click', checkFlip);
square8.addEventListener('click', checkFlip);
square9.addEventListener('click', checkFlip);
square10.addEventListener('click', checkFlip);
square11.addEventListener('click', checkFlip);
square12.addEventListener('click', checkFlip);
square13.addEventListener('click', checkFlip);
square14.addEventListener('click', checkFlip);
square15.addEventListener('click', checkFlip);
square16.addEventListener('click', checkFlip);

function checkFlip(evt) {
    if (!evt.target.style.backgroundColor) {
        flipSquareEvent(evt);
    } else {
        document.getElementById("message").innerHTML = "already been flipped";
    }
}

function flipSquareEvent(evt) {
    socket.emit('flip-square', {
        id: evt.target.id
    });
};

function flipSquare({id}) {
    if (turnCounter === 1) {
        document.getElementById(id).style["background-color"] = "blue";
    } else {
        document.getElementById(id).style["background-color"] = "red";
    }
   turnCounter *= -1;
}
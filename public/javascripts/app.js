const socket = io();

socket.on('flip-square', function(data) {
    flipSquare(data);
})

socket.on('reset', function() {
    document.getElementById("message").innerHTML = 'This button is supposed to reset the game, but for now you have to refresh the page';
});

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


square1.addEventListener('click', flipSquareEvent);
square2.addEventListener('click', flipSquareEvent);
square3.addEventListener('click', flipSquareEvent);
square4.addEventListener('click', flipSquareEvent);
square5.addEventListener('click', flipSquareEvent);
square6.addEventListener('click', flipSquareEvent);
square7.addEventListener('click', flipSquareEvent);
square8.addEventListener('click', flipSquareEvent);
square9.addEventListener('click', flipSquareEvent);
square10.addEventListener('click', flipSquareEvent);
square11.addEventListener('click', flipSquareEvent);
square12.addEventListener('click', flipSquareEvent);
square13.addEventListener('click', flipSquareEvent);
square14.addEventListener('click', flipSquareEvent);
square15.addEventListener('click', flipSquareEvent);
square16.addEventListener('click', flipSquareEvent);

function flipSquareEvent(evt) {
    socket.emit('flip-square', {
        id: evt.target.id
    });
    console.log(evt.target.id)
};

function flipSquare({id}) {
   document.getElementById(id).style["background-color"] = "blue";
}
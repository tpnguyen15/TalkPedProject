/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * We are using jquery
 */

$(document).ready(function(){    
// Initialize button variable on site load    
var button = document.getElementById('button');    

//Button click activates new game.
button.onclick = function() {
    var playing = document.getElementById("players").value;
    //Retrieves players chosen
    newGame(playing);
};

/*
 * Throws dice
 * @returns {Number}
 */
function diceThrow() {
    //creates a random die.
    var dice = Math.floor(Math.random() * 5) + 1;
  return dice;
}



/*
 * Creates a new game by clicking "Start" button
 */
function newGame(players) {
    var turn = 0;
    $("#start").remove();
    //Removes "Start" button
    
    //Creates an array of 'players' to track location on board. Size depends on players selected
    var playerInfo = new Array(parseInt(players));
    document.write(playerInfo.length + " Spillere");
    document.write("<br><br><br>");
    for (var i = 0; i < playerInfo.length;i++){
        playerInfo[i] = [0];
    }
    
    //Following block creates a dice roll button
    var btn = document.createElement("button");
    var t = document.createTextNode("Click");
    btn.appendChild(t);
    document.body.appendChild(btn);
    
    //Begins main game loop
    gameLoop(playerInfo, turn);
    }

/*
 * Game loop.
 */

function gameLoop(playerInfo, turn){
    diceThrow();
    document.write("</br>");
    //Testing loop. Rather than input, will be called on buttonclick later.
    while (turn < 10) {
        document.write("Terningkast "+(turn+1)+ ": "+diceThrow()+ "</br>");
        turn++;
    }
}
});
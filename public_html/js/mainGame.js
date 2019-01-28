/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var player = [];
var turn = 0;
    
    for (var i = 0; i <= 12; i++) {
    player[i] = new Player("","");
    player[i].index = i;
    document.write(player[i].index);
}

function Player(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
}


function newGame(players) {
    var loc = "";
    var p;
    for (var i = 1; i <= players; i++) {
        //alert(i);
        p = player[i-1];
        p.color = document.getElementById("player"+i+"color").value.toLowerCase();
        p.name = document.getElementById("player"+i+"name").value;
        //alert(p.name);
        //alert(p.color);
    }
    for (var i = 0; i < players ; i++) {
        loc += "X";
    }
    document.getElementById("b1").textContent = "[" + loc + "]";
    document.getElementById("setup").style.display = "none";
    play(players);
    
}
/*
 * Game loop.
 */

function play(players) {  
    if (turn >= players) {
        turn = 0;
    }
    document.getElementById("hist").innerHTML += (player[turn].name + "<br>Posisjon: " + player[turn].position);
    var dice = diceThrow();
    player[turn].position += dice;
    
    
    document.getElementById("dice").innerHTML = "<button onclick=\"play(" + players + ")\">"+player[turn].name+" sin tur til å kaste</button>";
    if (player[turn].position > 15){
        player[turn].position = player[turn].position - 15;
    }
    document.getElementById("hist").innerHTML += ("<br>Kast: " + dice + "<br>Ny posisjon: " + player[turn].position + "<br>");
    turn++;
}




Array.prototype.randomize = function(length) {
	length = (length || this.length);
	var num;
	var indexArray = [];

	for (var i = 0; i < length; i++) {
		indexArray[i] = i;
	}

	for (var i = 0; i < length; i++) {
		// Generate random number between 0 and indexArray.length - 1.
		num = Math.floor(Math.random() * indexArray.length);
		this[i] = indexArray[num] + 1;

		indexArray.splice(num, 1);
	}
};
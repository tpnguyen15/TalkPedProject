/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * We are using jquery
 */



/*
 * Throws dice
 * @returns {Number}
 */
function diceThrow() {
    //creates a random die.
    
    var dice = Math.floor(Math.random() * 6) + 1;
  return dice;
}

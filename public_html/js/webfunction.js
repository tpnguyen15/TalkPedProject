$(document).ready(function(){    




document.getElementById('playernumber').addEventListener('change', function(){
    var x = this.value;
    $(".player-input").hide();
    for (var i = 1; i <= x; i++) {
        document.getElementById("player"+i+"input").style.display = "block";
    }
});




var button = document.getElementById('startGame');    

button.onclick = function() {
    var playing = document.getElementById("playernumber").value;
    //Retrieves players chosen
    newGame(playing);
    };
    
    
});

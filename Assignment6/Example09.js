var gameOn = true;
var playerUp = "X";
var computerActive= false; 
var scoreX= 0;
var scoreO= 0; 
var scoreY=0;

var scoretX=0;
var scoretO=0;  

function $(id) {
    return document.getElementById(id);
}
//sets game board and game score back to blank and zero
function resetScore(){
	$("X").value= 0;
	$("Y").value= 0;
	$("O").value= 0;
    
	scoreX = 0;
	scoreY = 0;
	scoreO = 0;
	$("c0r0").innerHTML="";
	$("c0r1").innerHTML=""; 
    $("c0r2").innerHTML="";
	$("c1r0").innerHTML="";
	$("c1r1").innerHTML=""; 
	$("c1r2").innerHTML=""; 
	$("c2r0").innerHTML="";
	$("c2r1").innerHTML=""; 
    $("c2r2").innerHTML="";
	gameOn= true; 
	playerUp= "X";
	
	
}
//Resets game squares back to blank and turns the game on
//has player x start after reset 
//This function does not reset score
function resetGame(){
	if (!gameOn){
			$("c0r0").innerHTML="";
			$("c0r1").innerHTML=""; 
	    	$("c0r2").innerHTML="";
			$("c1r0").innerHTML="";
			$("c1r1").innerHTML=""; 
			$("c1r2").innerHTML=""; 
			$("c2r0").innerHTML="";
	   		$("c2r1").innerHTML=""; 
	    	$("c2r2").innerHTML="";
		 	gameOn=true;
			playerUp="X";

 
	}
	//checks with player to see if they wish to reset the game while game is still in progress
	else if (gameOn=true) {
		var r=confirm("Game in Progress!  Are you sure you want to reset?");
				if(r==true){
					$("c0r0").innerHTML="";
					$("c0r1").innerHTML=""; 
			    	$("c0r2").innerHTML="";
					$("c1r0").innerHTML="";
					$("c1r1").innerHTML=""; 
					$("c1r2").innerHTML=""; 
					$("c2r0").innerHTML="";
			   		$("c2r1").innerHTML=""; 
					$("c2r2").innerHTML="";
					playerUp="X";
			}		
	}
	
	
}
//Determines which player is up
function MakeMove(ele) {
    if (gameOn) {
        if (ele.innerHTML == "") {
            ele.innerHTML = playerUp;
            CheckForWin();
            if (playerUp == "X") {
                playerUp = "O";
            } else {
                playerUp = "X";
            }
			if (computerActive && gameOn){
				//ele.innerHTML = playerUp;//highlight on and off
				computerMove();
				CheckForWin();
				if (playerUp == "X") {
					playerUp = "O";
				} 	else {
					playerUp = "X";
				}
			} 
        } else {
            alert("You can't make a move there.");
        }
    } else {
        alert("Game Over - you can not make a move.");
    }

}
//play against computer
function setComputerActive (){
	computerActive= true;
	MakeMove(); 
}
//play against other person
function setHumanActive (){
	computerActive= false;
	MakeMove(); 
}
//This is the match section of the code
// After conditions are fulfilled and user presses button it works 
// I cannot figure out how to get it to loop through after button is pressed before requirements 
function bestThree (){
		var matchThree= true; 
		if(scoretO>=2){
			$("tX").value= 0;
			$("tO").value= 0;
			scoretX = 0;
			scoretO = 0;
			alert("Player O Won Match!");
		}
	if(scoretX>=2){
			$("tX").value= 0;
			$("tO").value= 0;
			scoretX = 0;
			scoretO = 0;
			alert("Player X Won Match!"); 
		}
	
}

function bestFive (){
		matchThree= true;
		if(scoretO>=3){
			$("tX").value= 0;
			$("tO").value= 0;
			scoretX = 0;
			scoretO = 0;
			alert("Player O Won Match!"); 
		}
	if(scoretX>=3){
			$("tX").value= 0;
			$("tO").value= 0;
			scoretX = 0;
			scoretO = 0;
			alert("Player X Won Match!"); 
		}
}
function bestSeven (){
		matchThree= true;
		if(scoretO>=5){
			$("tX").value= 0;
			$("tO").value= 0;
			scoretX = 0;
			scoretO = 0;
			alert("Player O Won Match!");
		}
	if(scoretX>=5){
			$("tX").value= 0;
			$("tO").value= 0;
			scoretX = 0;
			scoretO = 0;
			alert("Player X Won Match!"); 
		}
}
//function checks for win
function CheckForWin() {
    var chk = new Array();
    var anyEmpty = false;

    chk[0] = $("c0r0").innerHTML + $("c1r0").innerHTML + $("c2r0").innerHTML;
    chk[1] = $("c0r1").innerHTML + $("c1r1").innerHTML + $("c2r1").innerHTML;
    chk[2] = $("c0r2").innerHTML + $("c1r2").innerHTML + $("c2r2").innerHTML;

    chk[3] = $("c0r0").innerHTML + $("c0r1").innerHTML + $("c0r2").innerHTML;
    chk[4] = $("c1r0").innerHTML + $("c1r1").innerHTML + $("c1r2").innerHTML;
    chk[5] = $("c2r0").innerHTML + $("c2r1").innerHTML + $("c2r2").innerHTML;

    chk[6] = $("c0r0").innerHTML + $("c1r1").innerHTML + $("c2r2").innerHTML;
    chk[7] = $("c2r0").innerHTML + $("c1r1").innerHTML + $("c0r2").innerHTML;

    for (var i = 0; i < 8; i++) {
        if (chk[i].length < 3)
            anyEmpty = true;
        if (chk[i] == "XXX" || chk[i] == "OOO") {
            gameOn = false;
			if (playerUp=="X"){
				scoreX++;
				scoretX++; 
				$("X").value= scoreX;
				$("tX").value= scoretX;
			}
			else{
				scoreO++;
				scoretO++;
				$("O").value= scoreO;
				$("tO").value= scoretO;
			}
            alert("Player " + playerUp + " is the winner!");
        }
    }

    if (anyEmpty == false && gameOn == true) {
        gameOn = false;
        alert("It's a tie!");
		scoreY++;
		$("Y").value= scoreY; 
    }
}
//Below is the computer intelligence section 
function computerMove(){
	var chk = new Array();
	var validMove= false;  
	
	//playerUp="O";
	chk[0] = $("c0r0").innerHTML + $("c1r0").innerHTML + $("c2r0").innerHTML;
    chk[1] = $("c0r1").innerHTML + $("c1r1").innerHTML + $("c2r1").innerHTML;
    chk[2] = $("c0r2").innerHTML + $("c1r2").innerHTML + $("c2r2").innerHTML;

    chk[3] = $("c0r0").innerHTML + $("c0r1").innerHTML + $("c0r2").innerHTML;
    chk[4] = $("c1r0").innerHTML + $("c1r1").innerHTML + $("c1r2").innerHTML;
    chk[5] = $("c2r0").innerHTML + $("c2r1").innerHTML + $("c2r2").innerHTML;

    chk[6] = $("c0r0").innerHTML + $("c1r1").innerHTML + $("c2r2").innerHTML;
    chk[7] = $("c2r0").innerHTML + $("c1r1").innerHTML + $("c0r2").innerHTML;  
		
		for (var i = 0; i < 8; i++){ 
        if (chk[i] == "XX") { 
			//validMode= false;
			//computerActive= false; 
			//playerUp="X"; 
			} 
		}	
	
	 
	while (!validMove){
		var row= Math.floor(Math.random()*3);
		var column= Math.floor(Math.random()*3);
		var currentMove=$("c"+column+"r"+row).innerHTML; 
		if (currentMove== "") {
			validMove=true;
			$("c"+column+"r"+row).innerHTML= playerUp
			playerUp="O"; 
		}
	}
}

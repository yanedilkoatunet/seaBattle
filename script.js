const shipLength = 3, 
    battleFieldLenght = 10;
let win = 0,
    ship = (Math.floor(Math.random() * (battleFieldLenght - shipLength + 1)) + 1),
    decks = ship + 1,
    decks2 = decks + 1,
    shoot,
    accuracy = 0,
    attempt = battleFieldLenght / 2; 
    console.log("" + ship + decks + decks2); 
while(attempt > 0 && win < 3){
    try { 
        shoot = prompt("Type number from 1 to " + battleFieldLenght + "!");
        if (isNaN(shoot)) {
            throw "This wasn't a number!";
        }
        if (shoot < 1 || shoot > battleFieldLenght){ 
            throw "Right range is from 1 to " + battleFieldLenght + "!";
        }
    } catch (err) {
        alert(err);
        shoot = "Wrong direction!!!";
    } finally {
        alert("Your shoot = " + shoot);
    }
    attempt--;
    function check(){
        win++;
        accuracy += 20;
        alert("You hitted right spot");
        return "";
    }
    if (shoot == ship) { 
        ship = check();
    } else if(shoot == decks) {
        decks = check();
    } else if(shoot == decks2) {
        decks2 = check();
    } else{
        alert("Try again! You missed the spot");
    }
}
if (win == 3) {
    alert("Congrats you're winner!!!");
} else {
    alert("You've lost!");
}
switch (attempt){
    case 2:
        accuracy += 40;
        break;
    case 1:
        accuracy += 20;
        break; 
}
alert("Your accuracy is " + accuracy + "%");
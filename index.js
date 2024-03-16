var my_array = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

function roll(){
    var player_1_num = Math.floor(Math.random() * 6);
    var player_2_num = Math.floor(Math.random() * 6);

    var player_1_dice = my_array[player_1_num];
    var player_2_dice = my_array[player_2_num];

    var result = "";

    if (player_1_num > player_2_num) {
        result = "Player 1 wins!";
    } else if (player_1_num < player_2_num) {
        result = "Player 2 wins!";
    } else {
        result = "It's a tie!";
    }

    document.getElementById("tavi").innerHTML = result;
    document.querySelector(".img1").setAttribute("src", player_1_dice);
    document.querySelector(".img2").setAttribute("src", player_2_dice);
}

document.getElementById("roll").addEventListener("click", ()=>roll());
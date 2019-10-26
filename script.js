var words = ["baboon", "bear", "cat", "camel", "cheetah", "deer", "dog", "elephant", "fox", "sugarGlider"];
var score = 0;


function game() {
    var random = Math.floor(Math.random() * words.length);
    var total = words.length;
    console.log(random)
    var word = words[random];
    var final = scramble(word);
    displayWord(final);
}

function scramble(word) {
    var array = word.split("");
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
        var index = Math.floor(Math.random() * array.length);
        var temp = array[i];
        array[i] = array[index];
        array[index] = temp;
    }
    var final = array.join("");
    console.log(final)
    return final;
}

function displayWord(final) {
    document.getElementsByClassName("game-display")[0].innerHTML = "";
    document.getElementsByClassName("game-display")[0].innerHTML = final;
}

function checkAnswer(word) {
    var answer = document.getElementById("answer").value;
    console.log(answer);
    if (answer == word) {
        console.log("correct");
        score++;
        document.getElementsByClassName("score")[0].innerHTML = " " + score + " / " + total;
    }

}
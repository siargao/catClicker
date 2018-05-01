var score = document.getElementById("score").innerText;


var increaseScore = document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("kiki").addEventListener('click', function () {
        alert(score)
      // document.getElementById(score).innerHTML = score + 1;
    });
});
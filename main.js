
var score = document.getElementById("score").innerText;
score = parseInt(score);

const catNames = ['inBasket', 'kiki', 'kittenGrey', 'lookUp', 'sleepingKiki']

const myUl = document.createElement('ul')

// Let's loop over the array catNames to create our list of cats
const createList = document.addEventListener('DOMContentLoaded', function () {

    catDiv.innerHTML = '';

    for (let i = 0; i < catNames.length; i++) {

        // This is the name of the cat list we are on
        const name = catNames[i]
        const myList = []

        // We're creating a DOM element for each li
        myList[i] = document.createElement('li');
        myList[i].textContent = name;

        // ... and when we click, alert the value of `num`
        myList[i].addEventListener('click', function () {
            catDiv.innerHTML = '';
            const catImage = document.createElement('img')
            const filename = name + '.png'
            catImage.setAttribute('src', filename)
            catImage.setAttribute('height', '400px')
            catImage.setAttribute('width', '600px')
            catDiv.appendChild(catImage)

            var increaseScore = document.getElementsByTagName("img")[0].addEventListener('click', function () {
                document.getElementById("score").innerText = score + 1;
                score = document.getElementById("score").innerText;
                score = parseInt(score);
            });

        });
        myUl.appendChild(myList[i]);
    };

    catList.appendChild(myUl);

});

var increaseScore = document.addEventListener('DOMContentLoaded', function () {

    document.getElementsByTagName("img")[0].addEventListener('click', function () {
        document.getElementById("score").innerText = score + 1;
        score = document.getElementById("score").innerText;
        score = parseInt(score);
    });
});


// local storage to display scores
// high scores is on a different page
// two js pages, one for each html page
// two css pages, one for each html page
// use dry code help 

var titleEl = document.getElementById("title");
var imageEl = document.getElementById("image");
var descriptionEl = document.getElementById("description");
var nextBtnEl = document.getElementById("next");

var count = 0;

var pets = [
    {
        title: "Nature Cat",
        image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        cuteness: 8
    },
    {
        title: "Cat Sleep",
        image: "https://images.unsplash.com/photo-1556582305-528bffcf7af0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        cuteness: 9
    },
    {
        title: "Sibling Cats",
        image: "https://images.unsplash.com/photo-1554396133-3ff490ac1c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        cuteness: 7
    }
];
function end() {
    titleEl.textContent = "you are out of pets!"
    imageEl.innerHTML = ""
    var pictureEl = document.createElement("img");
    descriptionEl.textContent = ""
    nextBtnEl.textContent = "start over";
    count = 0;

}

function changePhoto() {
    if(count === 0) {
        nextBtnEl.textContent = "Next"
    }
    if(count === pets.length) {
        end()
        return
    }
    titleEl.textContent = pets[count].title;
    imageEl.innerHTML = "";
    var pictureEl = document.createElement("img");
    pictureEl.setAttribute("src", pets[count].image);
    // pictureEl.setAttribute("alt", placeholder);
    imageEl.appendChild(pictureEl);
    descriptionEl.textContent = "Pet cuteness level: " + pets[count].cuteness;

    count++;
}

nextBtnEl.addEventListener("click", changePhoto);
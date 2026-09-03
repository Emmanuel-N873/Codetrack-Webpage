// console.log("Browser Console Check")

//Document Object Model (DOM) Manipulation
//Note: Every element in the HTML document is represented as an object in the DOM. The DOM allows us to access and manipulate these elements using JavaScript.
//body element are known as "document"

// const headingOfPage = document.querySelector("h1");
// // headingOfPage.textContent = "I love JavaScript";

// console.dir(headingOfPage);
// console.log(headingOfPage.textContent);

// const heroPrimaryButton = document.getElementById("hero_pri")
// heroPrimaryButton.textContent = "Ten Ten Naira"
// heroPrimaryButton.style.backgroundColor = "Black"
// console.dir(heroPrimaryButton);

// //When you have alot of things you want to change all at once.
// const allPtags = document.querySelectorAll("p");

// allPtags.forEach((ptag) => {
//     ptag.textContent = "Na me dey run am"
//     console.log((ptag.textContent = "Na me dey run am"));
// });
// console.log(allPtags);

//Event driven manipulation
const heroPrimaryButton = document.getElementById("hero_pri");
const mainTitle = document.getElementById("mainTitle");

heroPrimaryButton.addEventListener("click", () => {
    //Button has been clicked
    heroPrimaryButton.textContent = "I have been clicked";
    heroPrimaryButton.style.backgroundColor = "blue";
    heroPrimaryButton.style.color = "green";

    mainTitle.textContent = "I Love JavaScript";

    //Alert the user that the button has been clicked.
    alert("Something has changed on the page. Check it out!");
});
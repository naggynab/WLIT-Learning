const boxOne = document.querySelector("#box1");

boxOne.addEventListener("click", function () {
  alert("Box 1 clicked");
});

const boxTwo = document.querySelector("#box2");

boxTwo.addEventListener("click", function () {
  alert("Box 2 clicked");
});

const boxThree = document.querySelector("#box3");

boxThree.addEventListener("mouseenter", function () {
  alert("You moved your mouse over Box 3");
});

const boxFour = document.querySelector("#box4");

boxFour.addEventListener("mouseleave", function () {
  alert("You moved your mouse out of Box 4");
});

const boxFive = document.querySelector("#box5");

boxFive.addEventListener("dblclick", function () {
  alert("Box 5 double clicked");
});
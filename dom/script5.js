// const boxOne = document.querySelector("#box1");
// console.log(boxOne);

// function handleBoxClick() {
//     alert("Box 1 clicked"); 
// }

// boxOne.addEventListener("click", function () {
//   handleBoxClick();
// });
// same as box wala before

const textInput= document.getElementsByClassName("textInput")[1];
textInput.addEventListener("keydown", function (event){
    if (event.key =="Enter"){
        console.log("Entered text:", textInput.value);
        console.log("Key pressed:", event.key);
    }
})
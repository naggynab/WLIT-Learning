//DOM Manipulation

//Selecting Elements
const title= document.querySelector("#heading");
console.log(title);
title.style.color = "red";
title.style.fontSize = "24px";
title.textContent = "Learning DOM Manipulation - Edited";
console.log(title)

const items_new = document.querySelectorAll(".item-list");
console.log(items_new);
items_new.forEach((item) => {
    item.style.color = "blue";
    item.style.fontSize = "18px";
    item.style.fontWeight = "bold";
    console.log(item);
});




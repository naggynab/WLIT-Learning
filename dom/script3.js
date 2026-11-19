// DOM Manipulation

//Creating Elements 
const ul= document.querySelector("ul");
console.log(ul);
const li=document.createElement("li");
console.log(li);
//Appending Elements

// ul.append(li); //append not working in the code snippet, but it is working in the browser console.
//Modyfying Texts
li.textContent = "New Item";

li.innerText="TextContent";

//Modyfying Attributes

li.setAttribute("id","heading");
li.removeAttribute("id");

const title=document.querySelector("#heading");
console.log(title.getAttribute("id"));

li.remove();
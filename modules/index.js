// console.log("Hello from the index.js file in the modules folder");
// const add =(a,b)=>{ a+b };
// module.exports = {add};

import express from "express";
import { add } from "./math.js";    
console.log(add(2, 3));
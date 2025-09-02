"use strict";
// ts automatically infers type of firstName as Mark , but if we forcefull want to declare
// it as type any we can use below syntax
let firstName = "Mark";
// OR
let lastName = "doe";
// let us say a data is fetched from api of a specific type . let's say data fetched is
let user = {
    name: "Mark",
    email: "abc@yahoo.com"
}; // we are getting this from api
function fetchUser() {
    return user;
}
let fetchedData = fetchUser;
let city = "New York"; // string
let population = 8400000; //number
const age3 = 32; // age3:32
let oldAge = 79; //oldAge: 79
let newAge = oldAge; //inference newAge:79
let data = new Map(); // data:Map<any,any>
let score = [90, 86, 100]; // score: number[]
/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */
// age = 85;
// score.push(10);
// score.push("New Score");
// let customAge: CustomAge = 50;
// let primitive: Primitive = new Date();
// let years: CheckScore = [];

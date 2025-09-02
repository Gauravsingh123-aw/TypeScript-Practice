"use strict";
let stringorNumber = 234;
let nou = undefined;
function print(data) {
    if (typeof data === "string")
        console.log(data);
    console.log("enter a string data");
}
let a;
print(a);
//never type is used only when our program needs to throws error and not executed , ts automaticaly infers it
const errFun = (err) => {
    throw new Error(err);
};
// ts automatically infers type of fun as never - as this is never completes.
// 
let strings = ["a", "b"];
let myf = () => 2;

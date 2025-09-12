"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//named function
function Print(name, age) {
    return `My name is ${name} and age is ${age}`;
}
// function expression
const Print2 = function (name, age) {
    return `My name is ${name} and age is ${age}`;
};
// arrow functions
const Print3 = (name, age) => {
    return `My name is ${name} and age is ${age}`;
};
// a required parameter cannot be declared after optional parameter
var Ageunits;
(function (Ageunits) {
    Ageunits["Years"] = "years";
    Ageunits["Months"] = "months";
})(Ageunits || (Ageunits = {}));
;
let P1 = {
    name: "Person1",
    age: 20,
    ageUnit: Ageunits.Years,
};
console.log(changeageUnit(P1));
function changeageUnit(p) {
    if (p.ageUnit === "years") {
        p.age = p.age * 12;
        p.ageUnit = Ageunits.Months;
        return p;
    }
    else {
        p.age = p.age / 12;
        p.ageUnit = Ageunits.Years;
        return p;
    }
}
// correctly infering type for anonymous function
let students = ["ram", "shyam", "laxman"];
students.map((student) => {
    console.log(student);
});
// void and never type
// when function does not return anything
function Data(data) {
    console.log(data);
}
// when function never gets executed like error function - we type it as never (which is most strict type)
function Er(error) {
    throw new Error(error);
}
//# sourceMappingURL=index.js.map
//named function
function Print(name, age) {
    return "My name is ".concat(name, " and age is ").concat(age);
}
// function expression
var Print2 = function (name, age) {
    return "My name is ".concat(name, " and age is ").concat(age);
};
// arrow functions
var Print3 = function (name, age) {
    return "My name is ".concat(name, " and age is ").concat(age);
};
// a required parameter cannot be declared after optional parameter
var Ageunits;
(function (Ageunits) {
    Ageunits["Years"] = "years";
    Ageunits["Months"] = "months";
})(Ageunits || (Ageunits = {}));
;
var P1 = {
    name: "Person1",
    age: 20,
    ageUnit: Ageunits.Years
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

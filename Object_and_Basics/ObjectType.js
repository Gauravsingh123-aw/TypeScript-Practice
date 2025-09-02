"use strict";
let Car = {
    brand: "Maruti",
    price: 342313
};
Car = [];
let newCar = {
    brand: "Maruti",
    price: 342313,
    info: {
        distance: 100000,
        status: "good"
    },
    awards: {
        bestCar: {
            date: new Date()
        },
        bestMileage: {
            date: new Date()
        }
    }
};
let post = {
    title: "Book",
    content: "asdf",
    date: new Date(),
    typeofAuthor: "Human"
};
let dog = {
    name: "buddy",
    barks: true,
    wags: true,
};
let cat = {
    name: "Bella",
    purrs: true
};
let hybrid = {
    name: "Bella",
    purrs: true,
    barks: true,
};
//so ts identify the type by discriminating between state
function logger(state) {
    switch (state.state) {
        case "Loading":
            return "Loading";
        //we can not access code here 
        case "Failed":
            return `Error ${state.code}`;
        case "success":
            return `Downloading ${state.response}`;
    }
}
let ans = logger({
    state: "Loading"
});
console.log(ans);
let hybriddg = {
    name: "max",
    color: "white",
    barks: true,
    purrs: false,
};

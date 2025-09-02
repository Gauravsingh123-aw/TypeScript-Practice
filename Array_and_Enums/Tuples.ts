// only in typescript , not in js

//tuples do have a fixed shape

// let person:(string|number)[]=["John","Doe",18];

// so here person does not ensure this order of first,last name and age in this order and only with these elements;
 
let person:User=["John","Doe",18];

type User=[string,string,number,string?];

console.log(person);

//tuples have types inside square bracket  , unlike array have type outside

type listOfStudents=[number,boolean, ...string[]];


const passingStudents: listOfStudents=[3,true,"John","Scale","Persistent"];


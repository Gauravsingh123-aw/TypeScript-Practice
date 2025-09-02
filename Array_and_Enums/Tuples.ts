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

type stringBooleanNumber=[string,...boolean[],number];

let stringBN:stringBooleanNumber=["abdc",true,false,false,false,true,true,44];




//ReadOnly Array and Tuples------------------------------>>>>>>>>>>>>


let arr:readonly (number| boolean | undefined)[]=[1,2,3];  
// arr.push(3)

type readOnlyTuple=readonly [string,number,boolean];

let personTuple:readOnlyTuple=["afesd",3,true];
// personTuple[0]="Asd"

// different syntax for readonly array
type a=Readonly<(string | number)[]>;

type  b= ReadonlyArray<string>;

let as:a=[1,"d"];

//tuples
type c=Readonly<[number,string,number]>;

// but above methods will be mostly used

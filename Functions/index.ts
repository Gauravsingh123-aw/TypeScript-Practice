//named function
function Print(name:string,age:number) :string{
    return `My name is ${name} and age is ${age}`;
}

// function expression
const Print2=function(name:string,age:number):string{
    return `My name is ${name} and age is ${age}`;
}
// arrow functions
const Print3=(name:string,age?:number) :string=>{
    return `My name is ${name} and age is ${age}`;
}

// a required parameter cannot be declared after optional parameter

enum Ageunits{
    Years="years",
    Months="months"
};

type Person={
    name:string;
    age:number;
    ageUnit:Ageunits;
}
let P1:Person={
    name:"Person1",
    age:20,
    ageUnit:Ageunits.Years
}
console.log(changeageUnit(P1));
function changeageUnit(p:Person):Person{
    if(p.ageUnit==="years"){
        p.age=p.age*12;
        p.ageUnit=Ageunits.Months;
        return p;
    }
    else{
        p.age=p.age/12;
        p.ageUnit=Ageunits.Years;
        return p;
    }
}

//practice 
// Type alias for a greeting function
type GreetFunction = (name?: string) => string;

// Implementation of greet function
function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

// Type alias for area calculation function
type AreaFunction = (width: number, height?: number) => number;

// Implementation of calculateArea function
function calculateArea(width: number, height: number = 10): number {
  return width * height;
}

// Type alias for status check function
type StatusFunction = (isActive?: boolean) => string;

// Implementation of checkStatus function
function checkStatus(isActive: boolean = true): string {
  return isActive ? "Active" : "Inactive";
}

// Function calls (no console output)
greet();           // "Hello, Guest!"
greet("John");    // "Hello, John!"

calculateArea(5);           // 50
calculateArea(5, 20);       // 100

checkStatus();            // "Active"
checkStatus(false);       // "Inactive"

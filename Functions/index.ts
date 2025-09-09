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
    greet?:(name:string)=>string
}
let P1:Person={
    name:"Person1",
    age:20,
    ageUnit:Ageunits.Years,
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

// correctly infering type for anonymous function
let students:string[]=["ram","shyam","laxman"];

students.map((student)=>{
    console.log(student);
})

// void and never type
// when function does not return anything
function Data (data:string):void{
 console.log(data);
}

// when function never gets executed like error function - we type it as never (which is most strict type)
function Er(error:string):never{
    throw new Error(error);
}

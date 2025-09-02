let Car:Object={
    brand:"Maruti",
    price:342313
}
Car=[];

// instead of this 
type Iinfo={
    distance:number;
    status:string;
}
type Tcar={
    brand:string;
    price:number;
    info:Iinfo;
    awards:{
        //index signature (only one allowed inside one obj)
        [key:string]:{
            date:Date;
        }
    }
};
let newCar:Tcar={
    brand:"Maruti",
    price:342313,
    info:{
        distance:100000,
        status:"good"
    },
    awards:{
        bestCar:{
            date:new Date()
        },
        bestMileage:{
            date:new Date()
        }
    }
}

//optional and Readonly properties
type Tpost={
    title:string;
    content:string;
    date:Date;
    category?:string; //optional
    readonly typeofAuthor:"Human" | "AI" //readonly 
}
let post:Tpost={
    title:"Book",
    content:"asdf",
    date: new Date(),
    typeofAuthor:"Human"
}


//Union types in object
type Dog={
    name:string;
    barks:boolean;
    wags:boolean
};
type Cat={
    name:string;
    purrs:boolean;
};
type DogAndCatUnion= Dog|Cat;

let dog:DogAndCatUnion={
    name:"buddy",
    barks:true,
    wags:true,
};
let cat:DogAndCatUnion={
    name:"Bella",
    purrs:true
};

let hybrid:DogAndCatUnion={
    name:"Bella",
    purrs:true,
    barks:true,
}
//but object must contain atleat all properties of one type
//for ex an animal cannot have few props from dog and few props 
//from cat , it must have complete props from atleast one of them
//for example

// let partialDog:DogAndCatUnion={
//     purrs:false,
//     barks:true,
// }


//discriminating unions

type NetworkLoadingState={
    state:"Loading"
};
type NetworkFailedState={
    state:"Failed";
    code:number;
};
type NetworkSuccessState={
    state:"success";
    response:{
        title:string;
        duration:number;
        summary:string;
    };
};

type NetworkState= 
NetworkLoadingState 
| NetworkFailedState 
| NetworkSuccessState;

//so ts identify the type by discriminating between state

function logger(state:NetworkState){
    switch(state.state){
        case "Loading":
            return "Loading";
            //we can not access code here 
        case "Failed":
            return `Error ${state.code}`
        case "success":
            return `Downloading ${state.response}`
    }
}
let ans=logger({
    state:"Loading"
})
console.log(ans)

// Intersection types

type DOG={
    name:string;
    color:string;
    barks:boolean;
};
type CAT={
    name:string;
    color:string;
    purrs:boolean;
}
type HybridDC= DOG & CAT;  // this will include common and unique props

let hybriddg:HybridDC={
    name:"max",
    color:"white",
    barks:true,
    purrs:false,
}


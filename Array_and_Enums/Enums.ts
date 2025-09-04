// enums are just like constants

// will automatically assing 1 to Up and keep incrementing later by 1 to other values
enum Direction{
    Up, //0
    left, //1
    right, //2 
    down //3
}
console.log(Direction.Up);
console.log(Direction.left);
console.log(Direction.right);
console.log(Direction.down);

//now if we assing only to first later ones will keep incrementing by one in order
enum Direction2{
    Up=1,
    left, //2
    down, //3
    right //4
}


enum Roles{
    ADMIN="admin",
    AUTHOR="author",
    EDITOR="editor",
}

type Person={
    name:string;
    email:string;
    role:Roles;
}
let p:Person={
    name:"Ram",
    email:"ram@email.com",
    role:Roles.ADMIN
}
// difference between other types and enum is that enums get converted to js while others do not
console.log(p);


// when enum is declared with const keyword , it does not get compiled to js . Only its value gets (when it is used)
const enum eDirection{
    left=1,
    right=2,
}
let Edirection=eDirection.left; // only this get compiled and not enum with const


// using object as const in MORDERN TS CODES

// we can use const too - mordern ts codes use this over enum(although both are ok to use)


const role={
    pending:"pending",
    success:"success"
} as const;



// but these object as const can not be used as types , to do so ---
type r={
    R:typeof role[keyof typeof role];       //this is the way
} ;
let c={
    R:role.success
}

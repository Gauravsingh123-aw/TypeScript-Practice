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
console.log(p);
console.log(Direction[0]);


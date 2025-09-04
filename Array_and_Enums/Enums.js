// enums are just like constants
// will automatically assing 1 to Up and keep incrementing later by 1 to other values
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["left"] = 1] = "left";
    Direction[Direction["right"] = 2] = "right";
    Direction[Direction["down"] = 3] = "down"; //3
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.left);
console.log(Direction.right);
console.log(Direction.down);
//now if we assing only to first later ones will keep incrementing by one in order
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["left"] = 2] = "left";
    Direction2[Direction2["down"] = 3] = "down";
    Direction2[Direction2["right"] = 4] = "right"; //4
})(Direction2 || (Direction2 = {}));
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["AUTHOR"] = "author";
    Roles["EDITOR"] = "editor";
})(Roles || (Roles = {}));
var p = {
    name: "Ram",
    email: "ram@email.com",
    role: Roles.ADMIN
};
// difference between other types and enum is that enums get converted to js while others do not
console.log(p);
var Edirection = 1 /* eDirection.left */; // only this get compiled and not enum with const

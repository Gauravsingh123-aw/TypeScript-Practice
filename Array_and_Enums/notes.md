### while defining and using readonly tuples and array there are certain rules

## 1. Array

### first method
````
let arr:readonly number[]=[1,2,3,4];


let arr : readonly (number|string|boolean)[];
````

### second method

````
let arr: Readonly<number>;

OR

let arr: ReadonlyArray<string>;
````
## 2. Tuple

### first method
````
type customTuple= readonly [string,number];

let cTuple:customTuple= ["a",2];
````

### second method
````
type c= Readonly<[string,number]>;
let cT:c=['a',4];
````
## important
we can not use readonly tuple like this
````
type c=[string,number];

type custom= readonly c; NOT ALLOWED
````


## Tree Shaking

#### its a build time optimization technique used to remove unused code from final js bundle. 
Just like shaking tree to remove dead leaves 

1. Relies on static analysis of ES module import/export
2. Webpack or parcel detects unused codes and remove them


## Reverse Mapping in Enums

````
enum Role {
  Admin = 5,
  User = 2
}

console.log(Role.Admin); // 1
console.log(Role[5]);    // "Admin" ← reverse mapping!

````
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

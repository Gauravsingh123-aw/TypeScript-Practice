async function FetchData(id:number):Promise<string>{
    return Promise.resolve("string returned");
}

type User={
    name:string;
    age:number;
}
const fetchValue=async (id:number): Promise<User>=>{
    return Promise.resolve({name:"sd",age:33});
}


// Rest parameter and Arguments

function multiplyBy(by:number, ...numbers:number[]){
    return numbers.map((number)=>by*number);
}
console.log(multiplyBy(2,3,4,5,6));


const arg:[number,number]=[3,0];
const angle=Math.atan2(...arg);
console.log(angle);
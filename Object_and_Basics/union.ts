type stringorNumber=string| number;

type numberorUndefined=number| undefined;

let stringorNumber:stringorNumber=234;

let nou:numberorUndefined=undefined;

 function print(data:string| undefined){
    if(typeof data==="string")
        console.log(data);
    console.log("enter a string data");
 }
 let a;
 print(a);

 //conditional typing

 type cDate=Date;
 type cString=string;
 
 type TrueString= cString extends string  ? true: false;
 type Truedate= cDate extends Date ? number : undefined;

 //type hierarchy
 type checknumber=number extends any?true: false;

 type checkfun= void extends undefined ? true :false;

 type checkArray= [] extends object ?true:false;

 type checkLast= Function extends object ?true:false;

 //never type is used only when our program needs to throws error and not executed , ts automaticaly infers it

 const errFun=(err:string)=>{
    throw new Error(err);
 }
 // ts automatically infers type of fun as never - as this is never completes.


 // 
 let strings:string[] =["a","b"];
 let myf:Function=()=>2;
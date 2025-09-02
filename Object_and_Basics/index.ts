//declaration
type user=string;
type customDate=Date;

//annotation
const Id:string="asdf";
let age:number=23;
let today:customDate=new Date();

//inference

function addNum(a:number,b:number)
{
    return a+b;
}

let finalResult=addNum(23,232);
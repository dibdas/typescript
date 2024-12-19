function firstElement(arr:(string|number)[]){
    
}
// cleaner way 
type Input = string | number 
function firstElement1(arr: Input[]){
    return arr[0]
    
}


// either a string array or a number array 
function firstElement2(arr: string[]| number[]){
    return arr[0]
    
}
const value = firstElement1(["hakirat","singh"])
console.log(value.toUpperCase());
const value1 = firstElement1([4,45,33,"hakirat","singh"])
// value it returns string or number
const value2 = firstElement2([4,45,33,])
const value3   = firstElement2(["hakirat","singh"])
value3.toUppercase()


function identity1(arg: string|number) {
    return arg;
}

// doesnt know if given a string return as string 
// unable to figure out string or number 
let output1 = identity1("myString");

// doesnt know if given a string return as string 
// unable to figure out string or number 
let output2 = identity1(100);

// it can be called with anything thats what T represents
// string  , number it defines generic 
// identity can be called with any value , generic value 
function identity2<T>(arg: T):T {
    return arg;
}
// able to figure out it is  a string
let output11 = identity2<string>("myString");
// able to figure out it is a number
let output22 = identity2<number>(100);
output11.toLocaleUpperCase()

function firstElement11<T>(arr: T[]):T{
    return arr[0]   
}
const value11 = firstElement11<string>(["hakirat","singh"])
value11.toLocaleLowerCase()
const value22 = firstElement11<number>([4,45,33,])
const value33= firstElement11<boolean>([true,false])
interface User{
    name:string
}
const el= firstElement22<User>([{name:"hakirat"}])

function firstElement22<T>(arr: T[]):T{
    return arr[0]   
}
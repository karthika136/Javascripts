// initially count is number.So we get error
let count = 1;
count = 'a'; 

//We did not declare the counts datatype
let counts;
counts=1;
counts=true;
counts ='a';


//Datatypes in typescript
let a: number;
let b: boolean;
let c: string;
let d: number[] = [1,2,3];
let f : any[] = [1,true,'a'];
let g : any;

//const 
const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;


//Enum 
enum Color {Red = 0, Blue = 1, Green =2};
let backgroundcolor = Color.Red;


//Type assertion

let msg ='msg';
let msgs = (<string>msg).endsWith('g');
console.log(msgs); //false


//Arrow funstions

let log = (message) => console.log(message);
// No parameter 
let log1 = () => console.log();





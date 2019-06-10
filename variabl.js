// initially count is number.So we get error
var count = 1;
count = 'a';
//We did not declare the counts datatype
var counts;
counts = 1;
counts = true;
counts = 'a';
//Datatypes in typescript
var a;
var b;
var c;
var d = [1, 2, 3];
var f = [1, true, 'a'];
var g;
//const 
var ColorRed = 0;
var ColorBlue = 1;
var ColorGreen = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;

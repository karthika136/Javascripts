var url ='http://mylogger.io/log';
function sayhi(name)
{
    console.log(name);
}

// console.log(window); there is no window object in nodejs

 module.exports =sayhi;


 const path = require('path');
 console.log(path)
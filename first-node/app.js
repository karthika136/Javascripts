// call from test.js
const sayhi = require('./test')
sayhi('message')


//Path module - Path of this file
const path = require('path');
var pathobj = path.parse(__filename);
console.log('File Path',pathobj)

// Os memory - In javascript we cant get the os details.but in node we can
const os = require('os');
const totalmem = os.totalmem();
const freemem = os.freemem();
console.log('Total Memory',totalmem);
console.log('Free Memory',freemem);


// filesystem
const fs = require('fs');
const files = fs.readdir('./', function(err,files){
    if(err) console.log('Error',err);
    else console.log('Files',files);
});
console.log(files)
// Using var keyword
function dosome()
{
    for(var i=1; i<5; i++){
        console.log(i);
    }
    console.log('final' + i);
}
dosome();

//Using let keyword

function dosomething()
{
    for(let i=1; i<5; i++){
        console.log(i);
    }
    //no compile time error in js file. I can save this same file into .ts.you can see it in another file in 
    //the same folder
    console.log('final' + i);
}
dosomething();
var a = 'car' ;
{
    let a = 5;
    console.log(a) // 5
}
console.log(a) // car


for(var i=1;i<5;i++){
    setTimeout(()=>{console.log(i);},10)
}
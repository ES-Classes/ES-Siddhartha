// let x=50;

// if(x<50)
// {
//     let y=60; //block scope
//     console.log();
//     // if(true)
//     // {
//     //     var z=34; //functional scope
//     // }
// }
// else if(x<70)
// {
//     console.log();
// }
// else{

// }

//Chaining and Nesting
// console.log(y);

//switch
let currentTime= new Date();
let day=currentTime.getDay();
console.log(day);

switch(day)
{
    case 0: console.log("Its Sunday!");
    break;
    case 1: console.log("Its Monday!");
    break;
    case 2: console.log("Its Tuesday!");
    break;
    case 3: console.log("Its Wednesday!");
    break;
    case 4: console.log("Its Thursday!");
    break;
    case 5: console.log("Its Friday!");
    break;
    case 6: console.log("Its Saturday!");
    break;
    default:
    break;
        
}
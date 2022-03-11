// function printHello(name)
// {
//     console.log(`Hello! ${name}`);
// }
// let printHello = function(name)
// {
//     console.log(`Hello! ${name}`);
// }

// function formatName(FirstName,lName)
// {
//     return `${lName}, ${FirstName}`;
// }

// // printHello("sid");

// let fullname=formatName('Sid','Raut');
// console.log(fullname);

// //Arrow function

// let x = (name) => `Hello! ${name}`;
// let formatName =(FirstName,lName) =>`Hello ${lName}, ${FirstName} `;

function Factorial(num)
{
    // let fact=1;
    // for(let i=0;i<num;i++)
    // {
    //     fact=fact*i;
    // }
    if(num<2)
    {
        return 1;
    }
    return num*Factorial(num-1);
}

let facto=Factorial(5);
console.log(facto);

let fact = (n)=> n<2 ? 1 : n * fact(n-1);
console.log(fact(5));
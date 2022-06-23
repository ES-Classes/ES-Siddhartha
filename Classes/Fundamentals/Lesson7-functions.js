// function printHello(name)
// {
//     console.log(`Hello! ${name}`);
// }
// printHello("SID");
// let printHello = function(name)
// {
//     console.log(`Hello! ${name}`);
// }

// function formatName(FirstName,lName)
// {
//     return `${lName}, ${FirstName}`;
// }

// console.log(formatName("Sid","Raut"));

// let formatName=function(fname,lname)
// {
//     return `${fname},${lname}`;
// }

// let fullname=formatName('Sid','Raut');
// console.log(fullname);

// //Arrow function

// let x = (name) => `Hello! ${name}`;
// let formatName =(FirstName,lName) =>`Hello ${lName}, ${FirstName} `;
// console.log(formatName("Sid","Raut"));

// function Factorial(num)
// {
//     let fact=1;
//     for(let i=0;i<num;i++)
//     {
//         fact=fact*i;
//     }
//     if(num<2)
//     {
//         return 1;
//     }
//     return num*Factorial(num-1);
// }

// console.log(Factorial(5));

// let facto=Factorial(5);
// console.log(facto);

// let Facto=(num)=>num<2? 1 : num*Facto(num-1);
// console.log(Facto(5));

// let fact = (n)=> n<2 ? 1 : n * fact(n-1);
// console.log(fact(5));

// function addNumber(n1,n2)
// {
//     return n1+n2;
// }

// console.log(`The addition of two number n1 and n2 is ${addNumber(5,7)}`);

// let addNumber=(n1,n2)=> n1+n2;
// console.log(addNumber(4,5));
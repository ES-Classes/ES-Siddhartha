let fruits=new Array('Apple','Mango');
let itemcount=fruits.length;

fruits.push('Orange'); //comes at last
fruits.unshift('Jackfruit'); //comes in first

// let names='ram,hari,sandesh';
// let nameArary=names.split(',');

// const nameString= nameArary.join(',');


// for(let name in nameArary)
// {
//     console.log(name);
// }

const index= fruits.indexOf('Mango');
console.log(index);

const isMangoThere= fruits.includes('Mango');
console.log(isMangoThere);

fruits.splice(-2,2,'Kiwi','Berry');

for(let fruit of fruits)
{
    console.log(fruit);
}

let x=[[1,2,3],[5,6,7]];
let t=x[1][1];
console.log(t);
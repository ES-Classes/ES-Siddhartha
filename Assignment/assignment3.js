function tipCalculator(bill)
{
    if(bill>=50 && bill<=300)
    {
        return bill*0.10;
    }
    else 
    {
        return bill*0.15;
    }
}
let bill=40;
let Cal=tipCalculator(bill);
console.log(Cal);
let Total=Cal + bill;
console.log(Total);

console.log(`The bill was ${bill} and the tip was ${Cal} and the total is Rs ${Total} `);



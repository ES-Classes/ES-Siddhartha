let nepalA=[47,62,51];
let nepalB=[59,45,73];

let averageA=(nepalA[0]+nepalA[1]+nepalA[2])/3;

let averageB;
averageB=(nepalB[0]+nepalB[1]+nepalB[2])/3;

console.log(averageA);
console.log(averageB);

if(averageA>averageB)
{
    console.log("NepalA team is winner.");
}
else
{
    console.log("NepalB team is winner");
}

if(averageA >=50 && nepalA[3]>=50)
{
    console.log("NepalA is winner");
}
else
{
    console.log("NepalB is winner");
}
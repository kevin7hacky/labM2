//STEP 1
function halfNumber(n)
{
    const result = n/2;
    console.log('Half of ${n} is ${result}.');
    return result;
}
//STEP 2
function squareNumber(n)
{
    const result=n*n;
    console.log(`The result of squaring the number ${n} is ${result}.`);
    return result;
}
//STEP 3
function percentOf(n1, n2) 
{
  const result = (n1 / n2) * 100;
  console.log(`${n1} is ${result}% of ${n2}.`);
  return result;
}
//STEP 4
function findModulus(n1, n2) {
  const result = n2 % n1;
  console.log(`${result} is the modulus of ${n1} and ${n2}.`);
  return result;
}
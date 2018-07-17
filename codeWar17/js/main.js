function factorial(n)
{
  if (n === 0) {
    return 1;
  } else if (n < 0 || n > 12) {
  } else {
    let arr = [];
    for (let i = 1; i <= n; i++){
      arr.push(i);
    }
    return arr.reduce((a,b) => a * b);
  }
}

let nFib = 20;

fib = (n) => {
    if (n < 2) return n;
    else return fib(n - 1) + fib(n - 2);
}

for (let i = 0; i < nFib; i++) console.log(fib(i));

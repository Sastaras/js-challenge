fizzbuzz = () => {
for (let i=1; i<=100; i++){
    if (!(i%3)) console.log("Fizz");
    if (!(i%5)) console.log ("Buzz");
    if (!(i%5 && i%3)) console.log ("FizzBuzz");
    else console.log(i);
}};

fizzbuzz();
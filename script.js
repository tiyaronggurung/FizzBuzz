
function fizzBuzz(){

    for( let i=1; i<=100; i++){
        if(i%3 === 0 && i%5 === 0){ // i that is divisible by 3 and 5.
            console.log("FizzBuzz");
        }
        else if(i%3 == 0){
            console.log("Fizz"); // i that is divisible by only 3.
        }
        else if(i%5 == 0){
            console.log("Buzz"); // i that is divisible by only 5
        }
        else{
            console.log(i) // i that is not divisible by 3 nor 5.
        }
    }
}

fizzBuzz(15);
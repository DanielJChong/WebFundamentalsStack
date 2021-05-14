// 1. Print odds 1-20
//     1. Print out all odd numbers from 1 to 20
//     2. The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

for(var num = 1; num < 20; num+=2){
    console.log(num);
}

// var = num
// val = 1 ->3 ->5 ->7 ->9 ->11 ->13 ->15 ->17 ->19 ->21
// console = 1, 3, 5, 7, 9, 11, 13, 15, 17, 19




// 2. Sum and Print 1-5
//     1. Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
//     2. The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15


var sum = 0;
for (num = 1; num <=5; num++) {
    sum = sum + num
    console.log("Num:", num, "Sum:", sum );
}


/*
var     val
sum     0 -> 1 -> 3 -> 6 -> 10 -> 15
num     1 -> 2 -> 4 -> 5 -> 6
*/
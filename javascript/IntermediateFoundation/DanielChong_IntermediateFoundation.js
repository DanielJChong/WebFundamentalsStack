// Intermediate Foundation

/*{ 1) Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

2) Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

3) Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
} DO NOT NEED TO DO!!!!
*/

//4) Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondLast (arr) {
    if (arr.length < 2){
        return null;
    }
    var secondtolast = 0;
    //        0 >1>2            5
    for (var i = 0; i < arr.length; i++) {
        //  arr[1]   ==         arr[3]
        if (arr[i] == arr[arr.length - 2]) {
            secondtolast = arr[i];
        }
    }
    return secondtolast;
}

console.log(secondLast([42, true, 4, "Liam", 7]))


//5) Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nthToLast (arr, num) {
    if (arr.length < 2){
        return null;
    }
    var dog = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] = arr[arr.length - num]) {
            dog = arr[i]
        }
    }
    return dog;
}

console.log(nthToLast([5,2,3,6,4,9,7],3))
console.log(nthToLast([1,2,3,4,5,6,7,8],6))

//6) Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(arr){
    if (arr.length < 2){
        return null;
    }
    var currentMax = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > currentMax) {
            currentMax = arr[i];
        }
    }
    var secondMax;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < currentMax) {
            secondMax = arr[i];
        }
    }
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > secondMax && arr[i] < currentMax) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
console.log(secondLargest([19,42,1,4,Math.PI,7,42]));
console.log(secondLargest([42]));

//OR

function secondLargest(arr){
    if (arr.length < 2){
        return null;
    }
    var currentMax = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > currentMax) {
            currentMax = arr[i];
        }
    }
    var secondMax = -Infinity;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > secondMax && arr[i] < currentMax) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
console.log(secondLargest([19,42,1,4,Math.PI,7,42]));
console.log(secondLargest([42]));


//7) Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function doubleTrouble(arr) {
    var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr.push(arr[i]);
            newArr.push(arr[i]);
        }
        return newArr;
}

console.log(doubleTrouble([4, "Ulysses", 42, false]))
console.log(doubleTrouble([1,2,3,"Hello","World","!"]))



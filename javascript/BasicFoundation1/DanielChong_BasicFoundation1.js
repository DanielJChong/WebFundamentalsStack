//Basic Foundation I

//1) Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function allNum(arr) {
    var newArr = []
    for (var i = 1; i <= 255; i++) {
        newArr.push(i);
    }
    return newArr;
}
console.log(allNum())


//2) Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function getEven() {
    for (var i = 1; i <=1000; i++) {
        if(i % 2 == 0) {
            evenSum = evenSum + i
        }
    }
}
var evenSum = 0

getEven()
console.log(evenSum)


//3) Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function getOdd() {
    for (var i = 1; i <= 5000; i+=2) {
        sum += i
    }
}
var sum = 0

getOdd()
console.log(sum)

//OR

function getOdd() {
    for (var i = 0; i <= 5000; i++)
        if(i % 2 != 0) {
            sum += i
        }
}
var sum = 0

getOdd()
console.log(sum)


//4) Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function sumArr(arr) {
    sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
}

var test = [1, 2, 3, 4]

sumArr(test)
console.log(sum)


//5) Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function max(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > temp) {
            temp = arr[i];
        }
    }
    return temp;
}

var test1 = [-3, 3, 5, 7]
var test2 = [10, 15, 8, 7]

max(test1)
console.log(max(test1))


//6) Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAve(arr) {
    // need sum of array
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    // then divide by arr.length to get average
    return sum / arr.length
}

var ave = findAve([1,3,5,7,20])
console.log(ave)


//7) Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function arrOdd() {
    var newArr = []
    for (var i = 0; i <= 50; i++) {
        if(i % 2 != 0) {
        newArr.push(i); 
        }
    }
    return newArr    
}

console.log(arrOdd())


//8) Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThan (arr) {
    var Y = 3
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > Y) {
            temp += 1;
        }
    }
    return temp;
}

var testarr = [1, 3, 5, 7]

console.log(greaterThan(testarr))


//9) Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squares (arr) {
    newArr = []
    for (var i = 0; i < arr.length; i++) {
        squared = arr[i]*arr[i];
        newArr.push(squared)
    }
    return newArr;
}

var testarr = [1,5,10,-2]

console.log(squares(testarr))


//10) Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function negatives(arr) {
    for(var i = 0; i< arr.length; i++){
        if(arr[i] < 0){
            arr[i] =  0;
        }
    }
    return arr;
}
var testArr = [1,5,10,-2]
console.log(negatives(testArr))


//11) Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr) {
    var max = 0;
    var min = 100;
    var sum = 0;
    var avg = 0;
    newArr = []
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    newArr.push(max);
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    newArr.push(min);
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    var avg = sum / arr.length;
    newArr.push(avg);        
    return newArr;
}

var test1 = [-3, 3, 5, 7]
var test2 = [10, 15, 8, 7]
var test3 = [1,2,3,4,5,6]

maxMinAvg(test2)
console.log(maxMinAvg(test2))


//12) Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swapfirstlast(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
}

var testArr = [1,5,10,-2]
swapfirstlast(testArr);
console.log(testArr);


//13) Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function string(arr) {
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}

var testArr = [-1,-3,2]
console.log(string(testArr))

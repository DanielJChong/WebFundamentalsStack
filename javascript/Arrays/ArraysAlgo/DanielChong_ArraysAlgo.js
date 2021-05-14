//1)  Print Values and Sum

    // 1. Print each array value and the sum so far
    // 2. The expected output will be: 

    Num 6, Sum 6
    Num 3, Sum 9
    Num 5, Sum 14
    Num 1, Sum 15
    Num 2, Sum 17
    Num 4, Sum 21
    

var testArr = [6,3,5,1,2,4]
var sum = 0
for (var num = 0; num < testArr.length; num++) {
    sum = sum + testArr[num]
    console.log("Num:", testArr[num], "Sum:", sum);
}

/*  var             val                                             Console
    testArr     [6,3,5,1,2,4]       
    sum             0 ->6 ->9 ->14 ->15 ->17 ->21                   num:6, sum:6
    num             0 ->1 ->2 ->3 ->4 ->5 ->6                       num:3, sum:9
    testArr[num]    6 ->3 ->5 ->1 ->2 ->4                           num:5, sum:14
                                                                    num:1, sum:15
                                                                    num:2, sum:17
                                                                    num:4, sum:21
*/


//2)  Value * Position

// 1. Multiply each value in the array by its array position
// 2. The expected output will be:

[0,3,10,3,8,20]


var testArr = [6,3,5,1,2,4]
var newArr = []

for (var num = 0; num < testArr.length; num++) {
    product = num * testArr[num];
    newArr.push(product)
}
console.log(newArr)


/*  var                 val                              Console
    testArr         [6,3,5,1,2,4]                         
    num             0 ->1 ->2 ->3 ->4 ->5 ->6
    testArr[num]    6   3   5   1   2   4                      
    product         0   3  10   3   8  20
    newArr                                            [0,3,10,3,8,20]   
*/
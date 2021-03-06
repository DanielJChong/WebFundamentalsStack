//Basic Function 1

/*
1. Understand how a computer executes each line of code
2. Get comfortable with how a function works and how its return statement works
3. Identify some common mistakes students make and learn how to avoid them

Predict the output of the following code snippets.  Please do NOT run any of this code directly, but first predict the output using the T-diagram.  If you're not used to using the T-diagram to run through the code yet, please get comfortable now.  This will help you down the line.  Once you've predicted the output for all of the codes, then run the code one by one and compare the two.

Please turn in a text file that includes your prediction for each problem and the actual output. At the top of the file, indicate how many out of 15 you predicted correctly.
*/

//**Predicted 10 out of 15 correctly


//1)
function a(){
    return 35;
}
console.log(a())

/*
var         val         console
a           35            35

Prediction: 35
Actual Output: 35
*/

//2)
function a(){
    return 4;
}
console.log(a()+a());

/*
var         val         console
a           4              8

Prediction: 8
Actual Output: 8
*/

//3)
function a(b){
    return b;
}
console.log(a(2)+a(4));

/*
var         val         console
a           0
b           2 and 4     6                        

Prediction: 6
Actual Output: 6
*/

//4)
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

/*
var         val         console
 a          0                             console.log(b) = 3
 b          3               3, 9          return b*3 = 3*3 = 9                      

Prediction: 3, 9
Actual Output: 3, 9
*/

//5)
function a(b){
    return b*4; 
    console.log(b);
}
console.log(a(10));

/*
var         val         console
 a           0           40                
 b          10           10                 return b*4 = 10*4 = 40                

Prediction: 10, 40
Actual Output: 40
 //maybe because return first, you don't do anything after return, thus you don't have to log console.log(b)
*/

//6)
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

/*
var         val         console
a           0               
b           15              console.log(a(15)) = 4         

Prediction: 4
Actual Output: 4
*/

//7)
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

/*
var         val         console
a           0
b           3             console.log(10,3) = 10, 3
c           10            console.log( a(3,10) ) = return b*c = 3*10 = 30

Prediction: 30
Actual Output: 10, 3, 30
*/

//8)
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

/*
var         val         console
a           0
b           3, or 4                       

Prediction: 3, 4
Actual Output: 3, 4
*/

//9)
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

/*
var         val                                             console
a           0?
i           0 ->2 ->3 ->5 ->6 ->8 ->9 ->11 ->12          2, 5, 8, 11          

Prediction: 2, 5, 8, 11
Actual Output: 2, 5, 8, 11
*/

//10)
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

/*
var         val                                     console
 a          0
 b          0                                  console.log(i); 0, 1, ... 9
 c          10                                 a(0,10); 0, 1, ... 9
 i          b = 0 ->1 ... 10                   return b*c = 0

Prediction: 0, 1, 2, 3, ... , 9, 0
Actual Output: 0, 1, 2, 3, ... 9, 0, 1, 2, 3, ... 9, 0
*/

//11)
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

/*
var         val         console
                         

Prediction: nothing, function is not called
Actual Output: nothing
*/

//12)
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

/*
var         val         console
                         

Prediction: nothing, function is not called
Actual Output: nothing
*/

//13)
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

/*
var         val         console
z           10
a           0                        

Prediction: 15, 10
Actual Output: 10
*/

//14) 
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

/*
var         val         console
z           10 or 15
a           0               a(); = function a(){
                                        var z = 15;
                                        console.log(z); = 15
                            console.log(z); = 10

Prediction: 15, 10
Actual Output: 15, 10
*/

//15)
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

/*
var         val                   console
z           10 or 15                function a(){
                                        var z = 15;
                                        console.log(z);     = 15
                                        return z;
a           0 -> 15                        

Prediction: 15
Actual Output: 15, 15
*/

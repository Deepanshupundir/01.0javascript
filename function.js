// function 
// function test(){
//     console.log("In Test()")

// }
// console.log("In Global main scope");
// test()
// test()
// test()
// test()
// test()

// console.log("Back to global main scope");


//   Global Execution Context :  Program Area outside any function

//function call within function

// function fun1(){
//     console.log("In fun1 function");
// fun2()
// console.log("Back to  fun2 function")
// }

// function fun2(){
// console.log("In fun2 function");
//  fun3()
//  console.log("Back to fun2 function");

// }

// function fun3(){
//     console.log("In fun3 function");
//     }
//     console.log("In Main  Globle scope");
//     fun1()
//     console.log("back ro main globle scope");




// type of function 
// 1
//   fun without return  value without parameter



// function add(){
//     var a =10 
//     var b = 20

// var sum  = a + b 
// console.log(`sum =${sum}`);

// }

// function test(){
//     add()
// }
// test()


// 2
// fun    return value without parameter

// function add() {
//     var a = 10
//     var b = 20
//     var sum = a + b
//     return sum
// }
// function test() {
//     var s = add()
//  console.log(`sum = ${s}`);
// }
//  test()   




// 3. 
// //function without return value with parameter
// function add(x,y){  //parameters or formal parameter
//     var sum = x+y
//     console.log(`sum = ${sum}`)
// }
// function test(){
//     var a = 10
//     var b = 20
//     add(a,b)        //arguments or actual parameter
// }
// test() 



// 4. function with return value with parameter
// function add(x,y){  
//     var sum = x+y
//     return sum
// }
// function test(){
//     var a = 10
//     var b = 20
//     var s = add(a,b)        
//     console.log(`sum = ${s}`)
// }
// test()



// function sumDigit(num){
//     var sum = 0
//     while(num!=0){
//         let r = num%10
//         sum = sum+r
//         num = parseInt(num/10)
//     }
//     return sum
// }
// console.log(sumDigit(12345))
// console.log(sumDigit(14785))
// console.log(sumDigit(85241))
// console.log(sumDigit(65892))
// console.log(sumDigit(985)) 
// console.log(sumDigit(99999))
// console.log(sumDigit(78595))


//  Default parameter or optianol parameter

// function test(a = 0, b = 0, c = 0) {
//     console.log(`a=${a}  b =${b}  c= ${c}`)
// }
// test(10, 20, 30)
// test(10, 20)
// test(10)
// test()


// function returing an array

// function test(){
//      return[ 10 , 20,  30 ,40,50]      //   When we use [] is return value are all  
// }
// console.log(test());

// Regular function 

// function test(){
//     console.log("In Regular test ")

// }
//  test()

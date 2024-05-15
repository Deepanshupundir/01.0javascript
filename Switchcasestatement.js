// Switch case statement

//  use to make to menu based progrom

// var a = Number(prompt("Enter a first number : "))
// var b = Number(prompt("Enter a second number : "))
// var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress / for Division\nPress % for Ramainder\nPress * for Mulitplication\nPress ** for Power\nEnter Your Choice : ")
// switch (ch) {
//     case '+':
//         document.write(`${a} + ${b}  = ${a + b}`)
//         break
//     case '-':
//         document.write(`${a} - ${b}  = ${a - b}`)
//         break



//     case '*':
//         document.write(`${a} * ${b}  = ${a * b}`)
//         break
//     case '%':
//         document.write(`${a} % ${b}  = ${a % b}`)
//         break
//         case '**':
//         document.write(`${a} ** ${b}  = ${a ** b}`)
//         break
//        case '/':
//         document.write(`${a} / ${b}  = ${a / b}`)
//         break

//     default:
//          document.write("Invalid choice")

// }




// var month = Number(prompt("Enter the month Number:"))
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:

//         document.write("month has 31days")
//         break
//         case 4:
//     case 6:
//     case 9:
//     case 11:

//         document.write("month has 30 days")
//         break
//     case 2:
//         var year = Number(prompt("Enter the year :"))
//         if (year % 400 == 0 || (year%100!=0 && year%4==0))
//             document.write("Month has 29days")
// else
// document.write("Month has 28days")
//     break
//     default:
//         document.write("Invalid choise")

//   }

//   iteration statement or loops

// used to iterate or repeat number of statement n times
// for loop

// for(var i=1;i<=10;i++){
//  console.log(`Hello world ${i}`)   
// }


// for(var i=1;i<=10;++i){
//     console.log(`Hello world ${i}`)   


//    }


// var month = Number(prompt("Enter the month number"))
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
// case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 12:

//         document.write("month has 31 days")

//         break
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         document.write("month has 30 days")
//         break
//     case 2:
//         var year = Number(prompt("Enter the year:"))
//         if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))

//             document.write("month has 29 Days")
//         else
//             document.write("month has 28 days")
//         break

//     default:
//         document.write("Invalid choise")

// }

// for(var i=1;i<=10;i=++i);{                 // ++i print is 11 time
//     console.log(`hello world ${i}`)         // when we use to var and add to semicoloum are work and print 
// }

// for(var i=1;i<=10;i=i++){                 // i++ print is infinity
//     console.log(`hello world ${i}`)
//  }

// for(let i=1;i<=10;i=++i)
// {                // when we use  let and add to semicoloum not run program
//     console.log(`hello world ${i}`)  
// }

// let i=1                               //same method     Every put out side by for(loop) but in roles under the for(loop)(;) is most imp
// for(;i<=10;i=++i){                
//     console.log(`hello world ${i}`)     

// }



// var i=1 
// for(;;){                   //   run Infinity fun(;;)
//     if(i>10)
//     break
// if(i>10)
// break
// console.log(`Hello world ${i}`);
// }

//  //wap to print table of any specific number
// var num = Number(prompt("Enter the  number:"))
// for(var i=1;i<=10;i++){
// document.write(`${num} * ${i} =${num*i}`)

// } 

//WAP o calculate sum of number in a specific range

// var start = Number(prompt("Enter the start number"))
// var end  = Number(prompt("end"))
// var sum = 0
// for (var i=start; i<=end;i++){
//     sum = sum +i
// }
// document.write(`sum = ${sum}`)


//  wap    perfect number 

//  var num = Number(prompt("Enter  the number"))
//  var sum = 0
// for (let i=1;i<=num/2;i++){
//     if(num%i==0)
//     sum = sum+i
// }
// if (sum==sum)
// document.write(`${sum} is perfect number`)
// else
// document.write(`${num} is a perfect number`) 



// While loop statement 

// var i = 1
// while (i <= 10) {
//     console.log(`Hello world${i}`)
//     ++i
// }    



// var num = Number(prompt("Enter the number:"))
// var sum = 0
// while (num != 0) {
//     let r = num%10
//     sum = sum + r
//     num = parseInt(num/10)

// } 
// document.write(`sum = ${sum}`)


// do while loop statement 
// do {
    // var a = Number(prompt("Enter a first number"))
    // var b = Number(prompt("Enter a second number"))
    // var ch = prompt("Press + for Addition\nPress - for Subtraction\nPress / for Division\nPress % for Ramainder\nPress * for Mulitplication\nPress ** for Power\nEnter Your Choice : ")
    // switch (ch) {
    //     case '+':
    //         alert(`${a} + ${b}  = ${a + b}`)

    //         break
    //     case '-':
    //         alert(`${a} - ${b}  = ${a - b}`)
    //         break


    //     case '*':
    //         alert(`${a} * ${b}  = ${a * b}`)
    //         break



    //     case '%':
    //         alert(`${a} % ${b}  = ${a % b}`)
    //         break

    //     case '**':
    //         alert(`${a} ** ${b}  = ${a ** b}`)
    //         break

    //     default:

    //         alert("Invalid choice")
    // }

//     ch = prompt("Pres n to Exit\nPres any other key to contine:")
// } while(ch != 'n')



// Nested loops statement


// for (var num = 1; num <=10; num++){

//     console.log(`Table of ${num} is `);
//     for (var i =1; i <=10; i ++){
//         console.log(`${num} * ${i} = ${num * i}`)
//     }
// }

// for (var num =1; num<=10;num++){
//     console.log(` sum of number${num} is `);
//     for (var i =1;i <=10; i++){
// console.log(`${num} + ${i} = ${num +i}`);
// }
// }



//Pattern



// for(let i =1; i<=5; i++){
//     for(let j =1; j<=5; j++){
//         document.write("*")           // out on window
//     }
//     document.write("<br>")
// }



// for(let i=1;i<=5;i++){                     
//     for(let j=1;j<=5;j++){
//         process.stdout.write("*")           // use to terminal code
 
//     }
//     console.log();
// }

// for( let i = 1 ; i <=5; i++){
// for (let j  =1 ; j<=5; j++){

//     process.stdout.write(`${j}`)

// }
// console.log()                                   //12345 five time output
// }




// for( let i = 1 ; i <=5; i++){
//     for (let j  =i ; j<=i+4; j++){
    
//         process.stdout.write(`${j%2}`)
    
//     }
//     console.log()                                   //10101 five time output
//     }




// for( let i = 1 ; i <=5; i++){
//     for (let j = 1 ; j<=5; j++){
    
//         process.stdout.write(`${String.fromCharCode(j+64)}`)
    
//     }
//     console.log()                                   //ABCDEfive time output
//     }


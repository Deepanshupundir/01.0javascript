// Switch case statement

// var a = Number(prompt("Enter a first number"))
// var a = Number(prompt("Enter a second number"))
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

//     case '**':
//         document.write(`${a} ** ${b}  = ${a ** b}`)
//         break

//     default: document.write("Invalid choice")

//}




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

// //  iteration statement or loops

// for loop
// for(var i=1;i<=10;i++){
//  console.log(`Hello world ${i}`)   
// }


// for(var i=1;i<=10;++i){
//     console.log(`Hello world ${i}`)   


//    }


var month = Number(prompt("Enter the month number"))
switch (month) {
    case 1:
    case 3:
    case 5:
case 7:
    case 8:
    case 9:
    case 10:
    case 12:

        document.write("month has 31 days")

        break
    case 4:
    case 6:
    case 9:
    case 11:
        document.write("month has 30 days")
        break
    case 2:
        var year = Number(prompt("Enter the year:"))
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))

            document.write("month has 29 Days")
        else
            document.write("month has 28 days")
        break

    default:
        document.write("Invalid choise")

}



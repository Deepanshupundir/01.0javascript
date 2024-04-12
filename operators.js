//Arthmetic operators

// var a = 15*5%60*3+45/10*2*5%55/9*10%5000+2*5%(5*5**3/1000)
// console.log(a)
// 15*5%60*3+45/10*2*5%55/9*10%5000+2*5%(5*5**3/1000)
// 15*5%60*3+45/10*2*5%55/9*10%5000+2*5%(5*125/1000)
// 15*5%60*3+45/10*2*5%55/9*10%5000+2*5%(625/1000)
// 15*5%60*3+45/10*2*5%55/9*10%5000+2*5%0.62
// 75%60*3+45/10*2*5%55/9*10%5000+2*5%0.62
// 15*3+45/10*2*5%55/9*10%5000+2*5%0.62
// 45+45/10*2*5%55/9*10%5000+2*5%0.62
// 45+4.5*2*5%55/9*10%5000+2*5%0.62
// 45+9*5%55/9*10%5000+2*5%0.62
// 45+45%55/9*10%5000+2*5%0.62
// 45+45/9*10%5000+2*5%0.62
// 45+5*10%5000+2*5%0.62
// 45+50%5000+2*5%.062
// 45+50+2*5%0.62
// 45+50+10%0.62
// 95+0
// 95


// combination operators
// var a = 10 
// var b = 30 
//  a+=b
//  console.log(a)


 
//  Relational operators

// less then

// console.log(10<20)   //true
// console.log(10<10)   //false
// console.log(10<5)    //false


//  less than eqaul 
// console.log(10<=20)   //true
// console.log(10<=10)   //true
// console.log(10<=5)    //false

// greater than 
// console.log(10>20)        //false
// console.log(10>10)        //false
// console.log(10>5)          //true


// greater than equal
// console.log(10>=20)       //  false    
// console.log(10>=10)      //false
// console.log(10>=5)      // true


// equal
// console.log(10==10)         //true
// console.log(10==20)         //false
// console.log(0=="10")      //true


// identical

//  console.log(10===10)         //true
//  console.log(10===20)        //false
//  console.log(10==="10")      //false




// not equal
// console.log(10!=10)             //false
// console.log(10!=20)             //true
// console.log(10!="10")           //false

// not identical
// console.log(10!==10)             //false
// console.log(10!==20)             //true
// console.log(10!=="10")           //true


//logical operators

//  logical And &&

// console.log(true && true)       //true
// console.log(10 && 20)          // true
// console.log(10 && 0)          //false
// console.log(0 && 0 )         // false
//console.log(false && false)  // false


// //  logical or ||

// console.log(true|| true)    //true
// console.log(10|| 10)        //true  
// console.log(10||20)           //true
// console.log(0||10)          //true
// console.log(false || false)            //false
// console.log(false||0)             //true



// logical Not !

// console.log(! true)    // false
// console.log(!10)         // false
// console.log( !false)            //true

// bitwise operators
// left oper
//  num<<n
//  num*2**n
//  n<<25
//  25*2**10
//  25*1024
//  25600  

// right operators

// num>>n
// num/2**n
// 2500**5
// 2500/32
// 78




// // conditional operators
//  var num = Number(prompt("Enter the Number:"))
//  num%2 == 0?document.write(`${num}is Even`) :document.write(`${num}is Odd`)






// increment and decrement 

// var a = 10 
// var b = a++ + ++a
// console.log(a,b)     // 12  22


// var  a  = 10 
// var  b = --a - a-- 
// var  c = a-- - a-- - b-- - --b
// console.log(a,b,c)      //  6 -2 3

// var a = 10
// var b = a-- + --a
// var c = --a - a++ + ++b - b++
// var d = a++ - a++ - b++ - ++b - c-- - --c

// console.log(a,b,c,d)// 10 22 -2 -41


 






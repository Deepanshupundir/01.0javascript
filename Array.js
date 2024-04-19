//to create an array using array literal

//  var a =  [ 10,20,30,40,50,"nitin",""]
//  console.log(a);


// array using empty array

// var a =[]  
// a.push (10)
// a.push (20)
// a.push (30)
// a.push (40)
// a.push (50)
// a.push (60)
// a.push (70,60,70,80,90)
// console.log(a)

// array constructor 

// var a = Array(10, )  // when array of size is 1 output is [empty items]
// console.log(a);    


// var  a = Array(10,20,30,40)
// console.log(a);       // when array of size onemore than output is show value return

// var a = Array()
// a.push (10)
// a.push (20)
// a.push (30)
// a.push (40)
// a.push (50)
// a.push (60)
// a.push (70,60,70,80,90)
// console.log(a)



//Array using for loops
// var a = [ 10, 20, 30, 40, 50]
// for(let i=0;i<a.length;i++){
// console.log(a[i]);   
// }


// Array using while loops

// var a = [10, 20, 30, 40, 50]
// let i = 0
// while(i<a.length){
//     console.log(a[i]);
//     i++
// }

//Array using do while loop
 
// var a = [10, 20, 30, 40, 50]
//  let i =0
//  do{
//     console.log(a[i]);
//     i++
//  }while(i<a.length)

// Array using for in loop

// var a = [10, 20, 30, 40, 50]
// for (let i in a){
//     console.log(a[i]);
// } 


// Array using for of loop

// var a = [10, 20, 30, 40, 50]
// for (let i of a){
//     console.log(i);
// } 


//toString convert an array into string and use , as separator

/*
join() convert an array into string and you can specify
         seperator bydefault join function use , as seperator
*/
// var a = [10, 20, 30, 40, 50]
// document.write(a)             
// console.log(a.toString())
// console.log(a.join())         // as it is output
// console.log(a.join(" "))   // remove ,
// console.log(a.join(" ,"))   // add ,
// console.log(a.join("/ "))   // add/

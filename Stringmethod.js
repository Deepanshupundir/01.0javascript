//string constant

// var a = 'deepu'
// var b = "ducat"
// var c = ` Noida 
//  sec16
//  It sector`

// console.log("a typeof a")
// console.log("b typeof b")
// console.log("c typeof c")

//strinf using for loops
// var a = "ducat is education"
// for (let i =0; i<a .length; i++){
//     console.log(a[i]);
//     i++
// }

// String using While loop 


// var a = "ducat is education"
// let i =0 
// while ( i<a .length){
//     console.log(a[i])
//     i++
// }


// String using do while loop


// var a = "ducat is education"
// let  i =0 
// do{
//     console.log(a[i]);
//     i++
// } while(i<a.lenght)


// //string using for in loop


// var a = "ducat is education"
// for(let i of a ){
//     console.log(i);
//}

// // string methods

// charAt()

//  var a = "Ducat educatin noida"
// console.log(a [0]);
// console.log(a .charAt(0));
// console.log(a[1]);
//  console.log(a.charAt(1));


// charCodeAt 

// var a = "ducat is education"
// console.log(a. charCodeAt());
// for(let i in a){
//     console.log(`${i} ${a.charCodeAt(i)}`)


// }


// from char code()  unicode convert into charater


// for(let i=0;i<10000;i++){
//        
//  document.write(`${i} = ${String.fromCharCode(i)} `)
//     }


// // Indexof()    pasitive / nagitive
// var a = "Ducat is education noida "
// console.log(a .indexOf("i"));
// console.log(a .indexOf("D"));



// // Includes()   output true / false
// var a = "Ducat is education noida "
// console.log(a . includes("i"));

// // lastIndexof ()   output place num 
// var a = "Ducat is education noida "
// console.log(a .lastIndexOf("o"));


// search  first index value picup

// var a = "Ducat is education noida "
// console.log(a .search("i"));


// copy a string a another   
// var a = "Ducat is education noida "
// var b =a

// console.log(`copied string is '${b}'`);  // Ducat is  education noida(output)



// concat()  concat one or more string in a string

// var a = "DUCAT"
// var  b = " EDU"
// var  c = " NOIDA"
// var  d =  a+ b+c
// var e =  a .concat(b,c) 
// console.log(d);        //DUCAT EDU NOIDA
// console.log(e);        //   DUCAT EDU NOIDA

// startwith
//endswith


// var ch = prompt("Enter the string")
// if (ch .startsWith("www."))
// document.write(`'${ch}'is  a Website Domain`)
// else if (ch .endsWith("@gmail"))
// document.write(`'${ch}'is a Gmail ID`)
// else
// document.write(`'${ch}'is a normal must as`)



// touppercase()
//tolocaleuppercase()

// var a = "deepu"
// console.log(a .toUpperCase());          //DEEPU
// console.log(a .toLocaleLowerCase());    //deepu
 

// to lovercase()
//to  locallovercase()

//  var a = "Ducat"

//  console.log(a .toLowerCase());         //ducat
//  console.log(a .toLocaleLowerCase());            //ducat




//substr()
//substring()
//slice()

// var  a = "education"

// console.log(a);
// console.log(a .substr(7,10));
// console.log(a .substring(7,10));
// console.log(a.slice(7,10));
// console.log(a .slice(10));
// console.log(a .slice(-10));


// repeat()  

// var  a = "education"
// console.log(a.repeat(20));  



// // replaceAll
// var  a = "education"

// console.log(a);
// console.log(a .replace("-" ,";"));

// console.log(a .replaceAll(".","-"));
// console.log(a .replaceAll("script","sc"));
// console.log(a .replaceAll("a",  "a","A"));

//replace()
// var  a = "education"
// console.log(a .replace("_","+"));



// split

// var  a = "education"
// console.log(a . split(""));



 // trim 
//  trimStart 
// trimEnd
// var a = " Ducat edu noida"

// var b = a.trim()
//  var c = a .trimEnd()
//  var  d = a . trimStart()
// console.log(a.length);
// console.log(b.length);
// console.log(c.length);
//  console.log(d.length);



// localcompare


// var a = "himanshu"
// var b = "dipanshu"

// console.log(a.localeCompare(b));
// console.log(b.localeCompare(a));
// console.log(a.localeCompare(a));

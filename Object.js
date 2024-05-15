//object literal
     
// let emp ={
//     id: 1001,
//     name:"Deepanshu Rana",
//     Dsg: "Web developer",
//     salary:50000,
//     city: "Noida",
//     State: "UP",
// }
// console.log(emp);

// Empty Object Literal  

// var emp = {}
// emp.id = 1001
// emp["name"] = 'Deepanshu Rana, Any '
// emp['dsg'] = " Web developer"
// emp [ `salary`] =  50000
// emp ["city"] =  `Noida`
// emp ["State"] = "UP"
// console.log(emp);



//   New object 

// var emp = Object()
// emp.id = 1001
// emp["name"] = 'Deepanshu Rana, Any '
// emp['dsg'] = " Web developer"
// emp [ `salary`] =  50000
// emp ["city"] =  `Noida`
// emp ["State"] = "UP"
// console.log(emp);

// Acessing object value with help of keys
//  var emp = Object()

// console.log(emp);
// console.log(emp.id);
// console.log(emp['name']);
// console.log(emp["dsg"]);
// console.log(emp["salary"]);
// console.log(emp["state"]);


// Acessing object value through loops
// let emp ={}

//     emp.id = 1001
// emp["name"] = 'Deepanshu Rana, Any '
// emp['dsg'] = " Web developer"
// emp [ `salary`] =  50000
// emp ["city"] =  `Noida`
// emp ["State"] = "UP"
//  for(let key in emp){
//     console.log(`${key}=${emp[key]}`);
// }         

//  Adding on  item in object existing

//  var  emp = Object()
//  console.log(emp);
// emp.email="pundir123@gmil.com"
// emp["Phone"] = "9690056310"
// emp[`Department`] = `IT`
// emp["age"]  =   25
// console.log(emp);


//  Deleting object item 
//   var emp = Object()
// delete emp.id
// delete emp['name']
// delete emp["dsg"]
// delete emp[`salary`]
// delete emp["state"]
// console.log(emp);


//  Nesting of Object

// var emp = {
// name: `Deepanshu Rana`,
// dsg: " Web developer",
// salary:50000,
// side: ["html , css, js, jquary,bootstrap, react"],
// active:"true",
// address:{
//     house: 1,
//     street:5,
//     nearby:"pnb bank",
//      city:"noida",
//      State:"Up",
//      pin:2000221,
// }
// }
// console.log(emp);

//  Function / Method in Object

// var obj = {

// key: "value1",
// key: "value2",
// key: "value3",

// fun1: function show(){
//     console.log("In Show function of obj");
// },
// fun2:function display(){
//    console.log("In display function of obj");
// },

// fun3: function(){
//     console.log("IN annonymous function of obj");
// },
// fun4:()=>console.log("In fat arrow function of obj"),
// fun5(){
//   console.log("In Regular function of obj");
// } 
      
// } 
// console.log(obj);
// obj. fun1()
// obj. fun2()
// obj. fun3()
// obj. fun4()          
// obj. fun5()

// var emp = {

//     id: 1001,
//     name: "Deepanshu pundir",
//     dsg: "web developer",
//     basic: 50000,
//     calculation() {
//         this.da = this.basic * 5 / 100
//     Tthis.to = this.basic * 8 / 100
//         this.ho = this.basic * 10 / 100
//         this.hro = this.basic * 15 / 100

//         this.gross = this.basic + this.da + this.to + this.ho + this.hro

//         this.itax = this.gross * 10 / 100
//         this.net = this.gross - this.itax

//     },

//     display() {
//         console.log(`
//     Id  :  ${this.id}
//      Name :    ${this.name}
//      Designation :${this.dsg}
//  Basic salary :${this.basic}
//       da :${this.da}
//       to:${this.to}
//       ho:${this.ho}
//       hro:${this.hro}
//       Gross salary${this.gross}:
//       Income Tax :${this.itax}
//        Net salary:${this.net}
//     `);
//     }
// }
// emp.calculation()
// emp.display()



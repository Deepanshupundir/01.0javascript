//   constructor (creating work)
// spical member of class ,provided memory instalization to a class object
// Self calling not a depended
// class Test {
//     construstor() {
//         console.log("constring..........");
//     }
//     show(){
//         console.log("show() of  test class");
//     }
//     display(){
//         console.log("Display()  of test class");
//     }
// }

// var  object =  new Test()
// object.show()
// object.display()

// class Add{
//     constructor(a=0,b=0){
//         this.a= a
//         this.b=b
//         this.sum= this.a+this.b
//     }

//     display(){
//         console.log(`${this.a}+${this.b} =${this.sum}`);
//     }
// }
// var x = new Add(10,20)
// var y = new Add ()

// x.display()
// y.display()



// class Add {
//     constructor(a = 0, b = 0) {
//         this.a = a
//         this.b = b
//         this.sum = this.a + this.b

//     }

//     display() {
//         console.log(`${this.a}+${this.b} =${this.sum}`);

//     }
// }
// var x = new Add(10, 30)
// var y = new Add()


// x.display()
// y.display()



// class Add {
//     constructor(a=0,b=0) {
//         this.a = a
//         this.b = b
//         this.sum = this.a + this.b


//     }
//     display() {

//         console.log(`${this.a}+${this.b}=${this.sum}`);
//     }

// }

// var x = new Add(10,5)
// var y = new Add(10,10)

// x.display()
// y.display()




// class parent{
//     show1(){
//         console.log("  IN show1() of parent class");
//     }
//     display(){
//         console.log("IN display() of parent  class");       // over ridding

//     }
// }
// class child extends parent{
//      show2(){
//         console.log("IN show2()of child class");

//      }
//      display(){
//          console.log("IN display() of  child class");

//      }
// }
//  var obj = new child()
//   obj.show1()
//   obj.show2()
// obj.display()

//  class parent{
//     show1(){
//         console.log("In  show()  of parent class");
//     }
//      display(){
//         console.log("In display() of parent class");
//      }

//  }

//  class child extends parent{
//     show2(){
//         console.log("In show2() of chlid class");

//     }

//     display(){
//     super.display()     //   stop overridding and assuming hiding by super.display()
//         console.log("In display() of child class");
//      } 

//  }
// var obj = new child()
// obj. show1()
// obj. show2()
// obj. display()


// class parent{
//     constructor(){

//         console.log("In construting of parent class");
//     }    

//      show1(){   

//         console.log("In show1() of parent class");

//      }



// }
// class child  extends parent{
//     show2(){
//         console.log("In show2()of child class");

//     }
// }

//   var obj = new child()
//   obj.show1()
//   obj.show2()


// class parent {
//     show() {
//         console.log("In show() of parent class");
//     }
// }
//  class child extends parent{
//     constructor(){   // constructor are not use in  child  class but  when we use in  child with super
//         super()
//         console.log("In constrating child class");

//     }

//  show2(){
//          console.log("In show()of child class" );
//  }
//  }
//  var obj = new child()
//  obj.show()
//  obj.show2()



// Himerancail inheritance : when  a single parent class  inherit  by more than  one child class
//   calucaltion  of two num
// class simple {         
//     constructor(a, b) {
//         this.a = a
//         this.b = b
//     }
// }
// class Add extends simple {

//     display() {
//         console.log(`${this.a}+${this.b}= ${this.a+this.b}`);
//     }
// }

// class sub extends simple {

//     display() {
//         console.log(`${this.a}-${this.b}=${this.a-this.b}`);
//     }
// }

// class multiple extends simple {

//     display() {
//         console.log(`${this.a}*${this.b} =${this.a*this.b}`);
//     }
// }



// class  divide extends simple {

//     display() {
//         console.log(`${this.a}%${this.b} =${this.a%this.b}`);
//     }
// }


// var obj1 = new Add(15, 12)
// var obj2= new sub(15, 32)
// var obj3= new multiple(15, 2)
// var obj4= new divide(15, 2)
// obj1.display()
// obj2.display()
// obj3.display()  
// obj4.display()


//     single inheritance :  when a  single child class inherit

//  class parent{
//      constructor(a,b){
//        this.a=a
//        this.b=b
//      }
//  }

//  class chlid extends parent{
//     display(){
//         console.log(`${this.a}+${this.b} = ${this.a+this.b}`);
//     }
//  }
//  var obj = new  chlid(10,30)
//  obj.display()

 
// multilevel inheritance :  when a child class inherit other class


//  class parent{
//     constructor(){
//          this.a =[10,20,30,40,50]
//     }
//  }
//  class child extends parent{
//     display(){
//         console.log(this.a);
//     }
//  }
//  class child2 extends child{
//     reverse(){
//         this.reverse
//         console.log("this ");
//     }
//  }
//   var x = new child2()
//   console.log("orignal arru");
//   x.display()
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
//          console.log("In show()cof child class" );
//  }
//  }
//  var obj = new child()
//  obj.show()
//  obj.show2()







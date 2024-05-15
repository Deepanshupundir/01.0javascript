//   Set   con not cantain duplicate items 
//   set create   forever  by [ array]
//  it is mutalbe datatype


//  How to make set
// var a = [ 1,2,3,4,5,5,6,6,7,8,9,9,10]
// var b = new Set (a)
// console.log(a);
//  var c = Array.from(b)
//  console.log(a);
//  console.log(c);

//  var a = [2,3,4,5,7,7,88,]
//  var b = new Set (a)

//  console.log(a);
// var c =Array.from(b)

// // console.log(b);    // (show) counting the interger in a array
// console.log(a);
// console.log(c);


// add() item to set 

// add() used to add itemsin set do nathing of item already exist
 
// var a = [1,2,3,4,5,6,99]

//  var b = new Set(a)
// b.add(100)           // add 100  in array
// console.log(b);
//  b.add(120)
//  console.log(b);



//  var a = [23,45,6,7,234]
//  var b = new Set (b)   // when we use var b   new set (b)  return value show only  100 & 110
// b.add(100)
//  console.log(b);
// b.add(110)
// console.log(b);

//   delete()
//  used to delete() any particular item form set are deleted

// var a = [ 12,23,435,5657,23]
// var b = new Set(a)
// b.delete(12)   12 delete form array set 
// console.log(b);

// b.delete(23)
// console.log(b);

// clear()  remove all item from set 


// var a = [ 12,23,435,5657,23]
// var b = new Set(a)
// b.clear()   all item are clear from[]array set
// console.log(b);
 
// has () return ture if them  exist in set else return false

//  has means  any value yes or not

// var a = [ 12,23,435,5657,23]
// var b = new Set(a)
// console.log(b.has(100));
// console.log(b.has(12));


// var a = [ 12,23,435,5657,23,55,66,77,88]
// var b = new Set(a)

// console.log(b.has(11,12));  //first value are select   /false
// console.log(b.has(12));  //true 
// console.log(b.has(11));   //false

 
// values : return a iteration containg all  item of set 
//    all in aaray item  are set in wise by wise
// var a = [ 12,23,435,5657,23]
// var b = new Set(a)
//  console.log(b.values());  // set interation


// keys: return  an iteration containg all  item of set
// var a = [ 12,23,435,5657,23]
// var b = new Set(a)
//  console.log(b.keys());

//  entries: return an iteration  in a pair of value, value cantaing all item of set
 
// var a = [ 12,23,435,5657,23]   
// var b = new Set(a) 
//  console.log(b.entries());     // [12,12],[23,23],[435,435]............
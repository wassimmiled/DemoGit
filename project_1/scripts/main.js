/**1 */
var obj ={
  num : 2
}
var obj2 ={
  num : 5
 
}

// var addToThis=function(a){
//   return this.num+a;
// };

// /*2*/ 
// addToThis.call(obj,3)//function.call(obj,arguments of function)
// console.log(addToThis.call(obj,3))
// console.log(addToThis.call(obj2,3))


/**3 */

var addToThis=function(a,b,c){
  return this.num+a+b+c;
};


// console.log(addToThis.call(obj,3,2,3))
// console.log(addToThis.call(obj2,3,2,3))



/**4 
var addToThis=function(a,b,c){
  return this.num+a+b+c;
};*/

// var arr =[1,2,3]
// addToThis.apply(obj, arr )//function.apply(obj,array of arguments of function)
// console.log(addToThis.apply(obj,arr))
// console.log(addToThis.apply(obj2,arr))
/**5 
var obj2 ={
  num : 5
}
var addToThis=function(a,b,c){
  return this.num+a+b+c;
};

var arr =[1,2,3]
addToThis.apply(obj, arr )//function.apply(obj,array of arguments of function)
console.log(addToThis.apply(obj,arr))
console.log(addToThis.apply(obj2,arr))*/

/**5*/
var addToThis=function(a,b,c,d){
  return this.num+a+b+c+d;
};

var arr =[1,5,6,5,6,6,5]
var bound =addToThis.bind(obj)



console.log(bound(1,5,6,5))
console.log(bound(...arr))



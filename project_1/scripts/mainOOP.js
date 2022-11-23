/**Using an Object Literal 

//Defining object
let person = {
  first_name:'Wassim',
  last_name: 'Miled',
  
  //method
  getFunction : function(){
      return (`The name of the person is ${person.first_name} ${person.last_name}`)
  },
       
  //object within object
  phone_number : {
      mobile:'12345',
      landline:'6789'
  }
}
console.log(person.getFunction());
console.log(person.phone_number.landline); */









/**Using an Object Constructor 
//using a constructor
function person(first_name,last_name){
  this.first_name = first_name;
  this.last_name = last_name;
}
//creating new instances of person object
let person1 = new person('Wassim','Miled');
let person2 = new person('Malek','NASR');

console.log(person1.first_name);
console.log(person2.first_name+' '+person2.last_name);
console.log(`${person2.first_name} ${person2.last_name}`);*/
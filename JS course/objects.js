const person = {
    firstName: 'Wassim',
    age: 10,
    country: 'Tunisia',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'test',
      pobox: 2002,
      city: 'Tunisia'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
  
  console.log(person.age)  
  console.log(person['age'])
  const copyPerson = Object.assign({}, person)


  const keys = Object.keys(copyPerson)

  console.log(keys) //['firstName','age',...]
  const values = Object.values(copyPerson)
  console.log(values)


  const entries =Object.entries(copyPerson)
  console.log(entries)

  console.log(copyPerson.hasOwnProperty('name'))//false
  console.log(copyPerson.hasOwnProperty('age'))//true
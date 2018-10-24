const Student = require('./student')
const Age = require('./age')
const Database = require('./database')

    
    person100 = new Student(‘Maria Lorenz’, 20)
    person101 = new Student(‘Adam Smith’, 30)
    person102 = new Student(‘Neetu Kasim’, 33)
    person103 = new Student(‘Magda Hi’, 34)
    students = [person100, person101, person102, person103];
    person100.sayAge()
    person101.sayAge()
    person102.sayAge()
    person103.sayAge()
    printName = (students) => students.sayName();
    students.forEach(printName)
    // students.forEach()
    Restaurant = class {
       constructor(name, cusine) {
           console.log(name);
           this.name = name;
           this.cusine = cusine;
       }
    }
    person11 = new Restaurant(‘Star’, ‘French’)
    person12 = new Restaurant(‘Slow’, ‘Japanese’)
 

    Database.save(person100)
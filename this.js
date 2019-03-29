// IS THIS?
// Objects are the basic building blocks in Javascript. There is one special object available in Javascript, “this” object.
// The value of “this” is decided based on how the code is being executed.

// DEFAULT

// window

function globalWindow(){
  console.log('simple function call')
  console.log(this === window)
}

// globalWindow()

// IMPLICIT CONTEXT

function introduceSelf(){
  return "Hello, my name is " + this.name
}

function whatsMyAge() {
  console.log(this.age)
}

let user = {
  name: "Henry",
  age: 35,
  favoriteColor: "pink",
  greeting: introduceSelf
}

user.sayAge = whatsMyAge
user.sayAge()

// console.log(user)

// user.greeting()

// EXPLICIT CONTEXT

// .call .apply .bind

let calculateTotal = function(tax, shipping){
  return this.price * (1 + tax) + shipping
}

let product1 = {
  name: "shoes",
  price: 27
}

let product2 = {
  name: 'pants',
  price: 600
}


let totalWithCall = calculateTotal.call(product2, .06, 5)

console.log(totalWithCall)

let arguments = [0.06, 5]

let totalWithApply = calculateTotal.apply(product2, arguments)

let totalWithBind = calculateTotal.bind(product1)


// Use the bind method of the getName function to get name to equal 'chris'.

var getName = function() {
  return this.name;
};

var example = {
  name: 'chris',
  age: 36
};
 
let getNameBound = getName.bind(example);

let name = getNameBound();


// CLASSES 
// classes are blueprints for creating objects

class Puppy {
  constructor(happiness, energy, behavior){
    this.happiness = happiness
    this.energy = energy
    this.behavior = behavior
  }
}

var Charles = new Puppy(100, 200, 300)

console.log(Charles)


// Create a class called Car that creates two properties on each Car object.

// The first property should be called manufacturer and the second property should be called year.

// The class should also have a method called displayManufacturer that returns the manufacturer.

// It should also have a method called displayYear that returns the year.

class Car {
  constructor(manufacturer, year){
    this.manufacturer = manufacturer
    this.year = year
  }
  displayManufacturer(){
    return this.manufacturer
  }
  displayYear(){
    return this.year
  }
}

var BillysFirstCar = new Car('Tesla', 2017)
BillysFirstCar.displayManufacturer();
BillysFirstCar.displayYear();


// Extend Class example

class Person {
  constructor(n, a, f) {
    this.name = n;
    this.age = a;
    this.favoriteColor = f;
  }

  greeting(){
    return "Hi, my name is " + this.name
  }
}

let person1 = new Person("Mike", 31, "blue")
console.log(person1)

class Athlete extends Person {
  constructor(name, age, favoriteColor, sport){
    super(name, age, favoriteColor) //age and favoriteColor are optional
    this.sport = sport
    this.injuries = [];
  }

  greeting() {
    return super.greeting() + ', and I play ' + this.sport + '.'
  }

  addInjury(injury){
    this.injuries.push(injury)
  }
}

let athlete1 = new Athlete('Amie',38, 'yellow', 'basketball')
console.log("athlete1.greeting():")
console.log(athlete1.greeting())
console.log('athlete1:')
console.log(athlete1)

athlete1.addInjury('broken leg')
console.log("Added injury")
console.log(athlete1)
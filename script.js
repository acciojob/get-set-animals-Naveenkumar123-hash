class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${species} makes a sound`);
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

const animal = new Animal("Tiger");
console.log(animal.species);  
animal.makeSound();  

const species="Siamese"
const myCat = new Cat(species);
myCat.makeSound();  
myCat.purr();  

const mydog = new Dog("Golden Retriever");
console.log(mydog.species); 
mydog.makeSound(); 
mydog.bark();  


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

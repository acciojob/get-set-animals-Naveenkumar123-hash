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
console.log(animal.species);  // Output: Tiger
animal.makeSound();  // Output: The animal makes a sound.

const myCat = new Cat("Persian");
console.log(Cat.species); 
myCat.makeSound();  // Output: The animal makes a sound.
myCat.purr();  // Output: purr

const mydog = new Dog("Golden Retriever");
console.log(mydog.species);  // Output: Golden Retriever
mydog.makeSound();  // Output: The animal makes a sound.
mydog.bark();  // Output: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

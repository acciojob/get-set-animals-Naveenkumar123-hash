class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The animal makes a sound.");
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

const cat = new Cat("Persian");
console.log(cat.species);  // Output: Persian
cat.makeSound();  // Output: The animal makes a sound.
cat.purr();  // Output: purr

const dog = new Dog("Golden Retriever");
console.log(dog.species);  // Output: Golden Retriever
dog.makeSound();  // Output: The animal makes a sound.
dog.bark();  // Output: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

"use strict";
class animal {
    constructor(petName, species, sound) {
        this.petName = petName;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The pet name is ${this.petName} and sparking like ${this.sound}`);
    }
}
const dog = new animal("German Shepard", "dog", "GGGG");
dog.makeSound();

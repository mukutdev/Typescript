class animal {
  constructor(
    public petName: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(
      `The pet name is ${this.petName} and sparking like ${this.sound}`
    );
  }
}

const dog = new animal("German Shepard", "dog", "GGGG");

dog.makeSound();

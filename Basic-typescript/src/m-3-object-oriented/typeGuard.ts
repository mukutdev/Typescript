type normalUser = {
  name: string;
};
type adminUser = {
  name: string;
  role: string;
};

function getUserRole(user: normalUser | adminUser) {
  if ("role" in user) {
    return `This user role is ${user.role}`;
  } else {
    return `normal user`;
  }
}

const newMember: normalUser = { name: "Mukut" };
const newMember2: adminUser = { name: "dipu", role: "admin" };

console.log(getUserRole(newMember2));

class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeBark() {
    console.log("Animal is barking");
  }
}

class cat extends Animal {
  constructor(name: string, species: string, sound: string) {
    super(name, species, sound);
  }
  catBark() {
    console.log("cat barking");
  }
}
class dog1 extends Animal {
  constructor(name: string, species: string, sound: string) {
    super(name, species, sound);
  }
  dogBark() {
    console.log("dog barking");
  }
}

function getAnimal(obj: Animal) {
  if (obj instanceof dog1) {
    obj.dogBark();
  } else if (obj instanceof cat) {
    obj.catBark();
  } else {
    obj.makeBark();
  }
}

const cat3 = new cat("Deshi cat", "cat", "Meaw");
const dog3 = new dog1("Deshi dog", "dog", "GEEEEeeee");



getAnimal(cat3)
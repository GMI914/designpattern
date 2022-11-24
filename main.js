class Address {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

class PersonBulder {
  constructor(name) {
    this.person = new Person(name);
  }

  setAge(age) {
    this.person.age = age;
    return this;
  }

  setNumber(number) {
    this.person.number = number;
    return this;
  }

  setAddress(address) {
    this.person.address = address;
    return this;
  }

  build() {
    return this.person;
  }
}

const person1 = new PersonBulder('giorgi').setAge(23).build();
const person2 = new PersonBulder('nika').build();
const person3 = new PersonBulder('dato').setAddress(new Address(1, 'vake')).build();
const person4 = new PersonBulder('erekle').setNumber('577000000').build();

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);

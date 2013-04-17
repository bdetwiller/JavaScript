function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cute_statement = function() {
  return this.owner + " loves " + this.name + "!";
};

Cat.prototype.meow = function() {
  console.log("Meow");
};

var a = new Cat("cat1", "bryant");
var b = new Cat("cat2", "Ean");

Cat.prototype.cute_statement = function() {
  return "Everyone loves " + this.name + "!";
};

a.meow = function() {
  console.log("Meow meow");
}

console.log(a.cute_statement());
console.log(b.cute_statement());
a.meow();
b.meow();



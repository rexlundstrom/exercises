const numbers = [3, 4];

numbers.push(5, 6);


numbers.unshift(1, 2);

numbers.splice(2, 2, 'tree', 'for')

const dogs = [
    { name: 'Barky', breed: 'collie'},
    { name: 'Woofy', breed: 'shephard'},
    { name: 'Howler', breed: 'beagle'},
    { name: 'Ruffy', breed: 'pomsky'}
];

const indexOfDog = dogs.findIndex(function(dog) {
  return dog.name === 'Howler';
});

console.log(indexOfDog);
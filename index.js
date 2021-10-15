let firstName = 'Tommy';

(function() {
    firstName = 'Billy';
    console.log(firstName);
})

console.log(firstName);
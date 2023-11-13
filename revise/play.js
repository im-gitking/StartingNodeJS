const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summerizeUser = function (userName, userAge, userHobbies) {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies ' + userHobbies);
}

const summerizeUser2 = (userName, userAge, userHobbies) => {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies ' + userHobbies);
}

const add = (a, b) => a + b;

const addOne = a => a + 1;

const addRandom = () => 1 + 10;

console.log(add(2, 3));
console.log(addOne(2));
console.log(addRandom());

console.log(summerizeUser(name, age, hasHobbies));
console.log(summerizeUser2(name, age, hasHobbies));
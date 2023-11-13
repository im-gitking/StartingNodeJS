var name = 'Max';
var age = 29;
var hasHobbies = true;

function summerizeUser(userName, userAge, userHobbies) {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies ' + userHobbies);
}

console.log(summerizeUser(name, age, hasHobbies));
const hobbies = ['Sports', 'Cooking'];

for(let hobby of hobbies) {
    console.log(hobby);
}

/* const newArr = hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}) */

const newArr = hobbies.map(hobby => 'Hobby: ' + hobby);

// can add more values in const array in js
hobbies.push('Programming');
console.log(hobbies);

// spread operator -> to copy array and object
const copiedArr = [...hobbies];
console.log(copiedArr);

const scndArr = (...args) => {
    return args;
}

console.log(scndArr(1,2,3,4));
const hobbies = ['Sports', 'Cooking'];

for(let hobby of hobbies) {
    console.log(hobby);
}

/* const newArr = hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}) */

const newArr = hobbies.map(hobby => 'Hobby: ' + hobby);

console.log(newArr);
// Destructuring in JS
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({name, age}) => {
    console.log(name);
    console.log(age);
}
printName(person);
//op: Max 29

const {name, age} = person;
console.log(name, age);
//op: Max 29

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
//op: Sports Cooking


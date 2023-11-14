const arr = ['apple', 'oranges' , '', 'mango', '' , 'lemon'];

const newArr = arr.map(elm => {
    if(elm === '') return 'empty string';
    return elm;
})

console.log(newArr);
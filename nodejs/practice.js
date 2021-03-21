function add(...numbers) {
    return numbers.reduce((acc, number) => acc + number);
}

console.log(add(3, 4, 5));

const fruit = ['apple', 'orange'];
const morefruit = ["pear", 'peaches'];

const allfruit = [...fruit, ...morefruit];
console.log(allfruit);

console.log(`This is a template literal ${allfruit}`);
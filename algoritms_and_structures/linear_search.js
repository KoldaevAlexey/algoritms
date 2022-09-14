//линейный поиск

const array = [1, 3, 2, 5, 7, 9, 7, 5];
let count = 0;

const linearSearch = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        count++;
        if (array[i] === item) {
            return i;
        }
    }
}

console.log(linearSearch(array, 7));
console.log(`count: ${count}`);
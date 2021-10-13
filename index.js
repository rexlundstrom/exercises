function countTruthy(array) {
    let counter = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] !== false && array[i] !== null && array[i] !== undefined
            && array[i] !== 0 && array[i] !== '') {
            counter++;
        }
    }
    return counter;
}
const testArray = [3, 4, 'fred', true, null, 'tacos', '', 0, 70]
console.log(countTruthy(testArray));
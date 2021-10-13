function countTruthy(array) {
    let counter = 0;
    for(let value of array) {
        if(value)
            counter++;
        }
    return counter;
}
const testArray = [3, 4, 'fred', true, null, 'tacos', '', 0, 70]
console.log(countTruthy(testArray));
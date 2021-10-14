console.log(funSum(5));

function funSum(limit) {
    let counter = 0;

    for(let i = 0; i <= limit; i++)
        if(i % 3 === 0 || i % 5 === 0)
            counter = counter + i;

    return counter;
}
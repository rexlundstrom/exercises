const movie = {
    title: 'goo and the boo',
    releaseYear: 2004,
    audienceRating: 9.2,
    rottenTomatoesRating: 0.3,
    director: 'Sam'
}

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string')
        console.log(key + ': ' + obj[key]);
    }
}
showProperties(movie);


// let output = 'title ' + obj.title + '\n' + 'director ' + obj.director;
//     return output;
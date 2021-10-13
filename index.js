const movie = {
    title: 'goo and the boo',
    releaseYear: 2004,
    audienceRating: 9.2,
    rottenTomatoesRating: 0.3,
    director: 'Sam'
}

function showProperties(obj) {
    let output = 'title ' + obj.title + '\n' + 'director ' + obj.director;
    return output;
}
console.log(showProperties(movie));
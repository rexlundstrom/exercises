const isLandscape = (width, height) => {
    return (width > height);
}
let photo = isLandscape(8,11);
console.log(photo);
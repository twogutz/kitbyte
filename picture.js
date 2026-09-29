const imageAmount = 19; // more comign ssoon
let setImg = Math.floor(Math.random() * imageAmount) + 1;
let imagePath = `<img src='/assets/pics/${setImg}.png'></img>`;

document.write(imagePath); document.close();

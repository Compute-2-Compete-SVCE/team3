let gImages = [];

function getImages() {
    return gImages;
}

function loadImages() {
    let numOfImages = 48;
    for (let i = 1; i <= numOfImages; i++) {
        let currImg = { url: `images/square/${i}.jpg`, id: `${i}` };
        gImages.push(currImg);
    }
}
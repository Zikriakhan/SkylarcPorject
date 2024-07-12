const images = ['image1.png', 'image2.png', 'image3.png', 'image4.png'];

function changeImage(index) {
    const imageElement = document.getElementById('displayedImage');
    imageElement.src = images[index];
}

const mainDiv = document.querySelector('.main');

// Create 50 boxes and append them to the main div
for (let i = 0; i < 225; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    mainDiv.appendChild(box);
}

const boxes = document.querySelectorAll('.box');
boxes.forEach((box, index) => {
    box.addEventListener('mouseenter', () => {
        if(index%2==0){
            box.classList.toggle('red');
        }
        else{
            box.classList.toggle('green');
        }
    });
    box.addEventListener('mouseleave', () => {
        box.classList.toggle('transparent');
    });
});

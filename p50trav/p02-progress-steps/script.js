const progress = document.getElementById('progress'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    circle = document.querySelectorAll('.circle');

let currentActice = 1;

next.addEventListener('click', ()=>{
    currentActice++;

    if(currentActice > circle.length) {
        currentActice = circle.length;
    }
update();

})

prev.addEventListener('click', ()=>{
    currentActice--;

    if(currentActice < 1) {
        currentActice = 1;
    }
update();

})

function update() {
    circle.forEach((circle, idx)=>{
        if(idx < currentActice) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
console.log((actives.length  - 1) / (circle.length - 1) * 100);
    progress.style.width = (actives.length  - 1) / (circle.length - 1) * 100 + '%';

    if(currentActice === 1) {
        prev.disabled = true;
    } else if (currentActice === circle.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
let btn = document.querySelector('.toggle');
let box = document.querySelector('div');
let flag = false;
let s1 = document.querySelector('#s1');
let s2 = document.querySelector('#s2');

function painter(gc, c, degree, hid, vis) {
    box.style.background = gc;
    box.style.color = c;
    btn.style.transform = `rotateY(${degree}deg)`;
    btn.style.color = gc;
    s1.style.visibility = hid;
    s2.style.visibility = vis;
}

function toggle() {
    flag = !flag;
    if (flag) {
        painter('white', 'black', 180, 'hidden', 'visible');
    } else {
        painter('black', 'white', 0, 'visible', 'hidden');
    }
}

btn.addEventListener('click', () => {
    toggle();
})

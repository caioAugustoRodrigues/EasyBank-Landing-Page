const menu = document.getElementById('menu');
const trigger = document.getElementById('toggle');
let isShown = false;

function showMenu() {
    if(!isShown) {
        menu.classList.add('show');
        console.log('show');
        isShown = true;
    } else {
        menu.classList.remove('show');
        console.log('hide');
        isShown = false;
    }
}

trigger.addEventListener('click', showMenu);


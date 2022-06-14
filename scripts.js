const anchors = document.querySelectorAll('a');
const images = document.querySelectorAll('img');
const noDrag = [...anchors, ...images];

noDrag.forEach( el => {
    el.setAttribute('draggable', 'false')
});

const input = document.querySelector('#new-link');

const access = {
    shorten: document.querySelector('.shorten-container'),
    invText: document.querySelector('.invalid-text'),
    submit: document.querySelector('.page-middle button'),
}

function addAlert() {
    access.shorten.classList.add('invalid-link');
    access.invText.style.display = 'block';
}

function remAlert() {
    access.shorten.classList.remove('invalid-link');
    access.invText.style.display = 'none';
}

function linkSubmit() {
    // const checker = input.value
    if (input.value !== 'ok') {
        addAlert();
        console.log('running addAlert');
    }
    else if (input.value === 'ok') {
        remAlert();
        console.log('running remAlert');
    }
}

access.submit.addEventListener('click', linkSubmit);
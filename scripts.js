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

function isValidURL(string) {
    if (!/^https?:\/\//i.test(string)) {
        string = 'https://' + string;
    }
    console.log(string);
    const matchPattern = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
    return matchPattern.test(string);
}

function linkSubmit() {
    const urlChecker = isValidURL(input.value);
    const alertChecker = access.shorten.classList[1];
    if (urlChecker === true) {
        if (alertChecker !== undefined) {
            remAlert();
        }
        console.log(input.value);
        input.value = null;
    } else {
        if (alertChecker !== undefined) {
            return;
        }
        addAlert();
    }
}

access.submit.addEventListener('click', linkSubmit);
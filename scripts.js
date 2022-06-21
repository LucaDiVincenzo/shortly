const anchors = document.querySelectorAll('a');
const images = document.querySelectorAll('img');
const noDrag = [...anchors, ...images];

noDrag.forEach( el => {
    el.setAttribute('draggable', 'false')
});

const access = {
    shorten: document.querySelector('.shorten-container'),
    input: document.querySelector('#new-link'),
    invText: document.querySelector('.invalid-text'),
    submit: document.querySelector('.page-middle button'),
}

const variables = {
    lastLink: 'Property-value to be overwritten',
}

function addAlert() {
    access.shorten.classList.add('invalid-link');
    access.invText.style.display = 'block';
}

function remAlert() {
    access.shorten.classList.remove('invalid-link');
    access.invText.style.display = 'none';
}

function isValidUrl(string) {
    if (!/^https?:\/\//i.test(string)) {
        string = 'https://' + string;
    }
    const matchPattern = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
    return matchPattern.test(string);
}

function getLink(object) {
    variables.lastLink = object["result"]["short_link"];
}

function shortUrl() {
    const apiBase = 'https://api.shrtco.de/v2/shorten?url=';
    const apiUrl = apiBase + access.input.value;
    fetch(apiUrl)
        .then(rsp => rsp.json())
        .then(data => getLink(data))
}

function addLink(text) {
    const newElement = document.createElement('div');
    newElement.className = `link`;
    document.getElementById('shorten').after(newElement);
    newElement.innerHTML = `
    <div class="new_container">
        <p>${text}</p>
        <button class="copy">Copy</button>
    </div>`;
}

function linkSubmit() {
    const urlChecker = isValidUrl(access.input.value);
    const alertChecker = access.shorten.classList[1];
    if (urlChecker === true) {
        if (alertChecker !== undefined) {
            remAlert();
        }
        shortUrl();
        addLink(access.input.value);
        // please, after submitting check 'variables.lastLink' in web console
    } else {
        if (alertChecker !== undefined) {
            access.input.value = null;
            return;
        }
        addAlert();
    }
    access.input.value = null;
}

access.submit.addEventListener('click', linkSubmit);
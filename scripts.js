const anchors = document.querySelectorAll('a');
const images = document.querySelectorAll('img');
const noDrag = [...anchors, ...images];

noDrag.forEach( el => {
    el.setAttribute('draggable', 'false')
});


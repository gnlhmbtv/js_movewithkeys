let div = document.getElementById("div");
let moveBy = 10;
window.addEventListener('load', () => {
    div.style.position = 'absolute';
    div.style.left = 0;
    div.style.top = 0;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            div.style.left = parseInt(div.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            div.style.left = parseInt(div.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            div.style.top = parseInt(div.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            div.style.top = parseInt(div.style.top) + moveBy + 'px';
            break;
    }
});
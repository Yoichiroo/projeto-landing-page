
function clickMenu() {
    if (menuBar.style.display == 'block') {
        menuBar.style.display = 'none'
    } else {
        menuBar.style.display == 'block'
    }
}

function mudouTamanho() {
    if(window.innerWidth > 768) {
        menuBar.style.display = 'block'
    } else {
        menuBar.style.display = 'none'
    }
}

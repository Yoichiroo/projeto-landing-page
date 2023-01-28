let menu = document.getElementById("menuBar")
let telaPreta = document.getElementById("tela-preta")

function clickMenu(){
    if(menu.style.display == 'none' ) {
        menu.style.display = 'block'
        telaPreta.style.display = 'block'
    } else {
        menu.style.display = 'none'
        telaPreta.style.display = 'none'
    }
}

function fecharMenu() {
    let menu = document.getElementById("menuBar")
    if(menu.style.display == 'none' ) {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
        telaPreta.style.display = 'none'
    }
}

window.addEventListener("resize", function() {
    if (window.innerWidth <= 320) {
        window.location.replace("incompativel.html")
    }
})


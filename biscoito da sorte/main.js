//variaveis//
const button2 = document.getElementById("btnReset")
const biscOpen = document.querySelector(".screen2")
const button1 = document.getElementById("btnTry")
const biscClose = document.querySelector(".screen1")
const paragrafo = document.querySelector(".paragrafo")
//function//
button1.addEventListener("click", ()=> {
    biscClose.setAttribute("hidden", "")
    biscOpen.removeAttribute("hidden")
    setTimeout(() => {
    paragrafo.classList.add("animation-top")
    }, 500);
})

button2.addEventListener("click", ()=> {
    biscClose.removeAttribute("hidden")
    biscOpen.setAttribute("hidden", "")
    paragrafo.classList.remove("animation-top")
})



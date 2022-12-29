const initBox = document.querySelector(".init-text")
const codeContainer = document.querySelector(".container")

const keyBox = document.querySelector(".key-box")
const keyCodeBox = document.querySelector(".keyCode-box")
const codeBox = document.querySelector(".code-box")

window.addEventListener("keydown",(event)=>{
    initBox.classList.add("hidden")
    codeContainer.classList.remove("hidden")

    if(event.code==='Space'){
        keyBox.innerHTML = "Space"
    } else {
        keyBox.innerHTML = `${event.key}`
    }
    keyCodeBox.innerHTML = `${event.keyCode}`
    codeBox.innerHTML = `${event.code}`
})
const container = document.querySelector(".container")
const icon = document.querySelector(".icon")
const search = document.querySelector(".search-bar")

icon.addEventListener('click', ()=>{
    search.classList.toggle('active')
    search.focus()
})
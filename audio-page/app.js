const sounds = ["Lion", "Ocean", "Wind"]

sounds.forEach(sound => {
    const btn = document.createElement("button")
    btn.classList.add("btn")

    btn.innerText = sound

    btn.addEventListener("click", ()=>{
        audioStop()

        document.getElementById(sound).play()
    })

    document.getElementById("buttons").appendChild(btn)
})

function audioStop() {
    sounds.forEach(sound =>{
        const song = document.getElementById(sound)

        // 暫停
        song.pause()

        song.currentTime = 0;
    })
}
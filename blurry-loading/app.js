const bg = document.querySelector(".pic-cover")
const text = document.querySelector(".loading-text")

let load = 0;

let int = setInterval(blurring, 30);

function blurring(){
    load++;

    if(load>99){
        clearInterval(int)
    }

    text.innerHTML = `${load} %`
    text.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
}

// detail
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
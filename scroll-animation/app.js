const boxes = document.querySelectorAll(".content-box")

window.addEventListener("scroll", boxPosition)

// 一進入畫面，要先執行一次
boxPosition();

function boxPosition() {
    const triggerAnimationHeight = window.innerHeight/5*4

    boxes.forEach(box =>{
        // getBoundingClientRect 可抓取 element 的各項位置參數（top 為其中一項）
        const top = box.getBoundingClientRect().top

        if(top<triggerAnimationHeight){
            box.classList.add("show")
        }else{
            box.classList.remove("show")
        }
    })
}
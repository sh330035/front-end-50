const prevBtn = document.querySelector('.controller__prev')
const nextBtn = document.querySelector('.controller__next')
const stepper = document.querySelector('.bar')
const nowStepper = stepper.getElementsByTagName('div')

const initialStep = 1

let nowStep = initialStep

const prevHandler = prevBtn.addEventListener('click', (event)=>{
    if(nowStep===1){
        return
    }
    nowStep--
    if(nowStep===1){
        prevBtn.classList.add('disabled')
        prevBtn.setAttribute('disabled','')
    }else if(nowStep===3){
        nextBtn.classList.remove('disabled')
        nextBtn.removeAttribute('disabled')
    }
    nowStepper[nowStep].classList.remove('active')
    return
})

const nextHandler = nextBtn.addEventListener('click', (event)=>{
    if(nowStep===4){
        return
    }
    nowStep++
    if(nowStep===4){
        nextBtn.classList.add('disabled')
        nextBtn.setAttribute('disabled','')
    }else if(nowStep===2){
        prevBtn.classList.remove('disabled')
        prevBtn.removeAttribute('disabled')
    }
    nowStepper[nowStep-1].classList.add('active')
    return
})
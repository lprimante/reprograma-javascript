let knob = document.querySelector("#knob")
let mouseClientClicked = undefined

let slider = document.querySelector("#slider")
let sliderSize = slider.clientWidth

// knob.style.left = knobScroll + sliderSize + "px"

let mouseDrag = false

knob.addEventListener("mousedown", event => {
    mouseDrag = true
    mouseClientClicked = event.clientX
    let knobScroll = knob.offsetLeft
    console.log()
})

document.addEventListener("mousemove", event => {
    if (mouseDrag) {
        const difference = event.clientX - mouseClientClicked
        knob.style.left = 
    }

    console.log()
})

document.addEventListener("mouseup", event => {
    mouseDrag = false
    
})



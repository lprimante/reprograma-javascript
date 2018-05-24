let questions = [
    {
        text: "Os seres humanos têm dois pulmões do mesmo tamanho?",
        answer: false
    },
    {
        text: "O menor osso do corpo humano é menor que um grão de arroz?",
        answer: true
    },
    {
        text: "O cérebro usa mais energia que um motor?",
        answer: true
    },
    {
        text: "O soluço é causado por um músculo?",
        answer: true
    },
    {
        text: "A cera grudenta que você tem dentro da sua orelha é para proteger contra ruídos altos?",
        answer: false
    }
]

const divContainer = document.querySelector("#container")
const startButton = document.querySelector("#container button")
const divOverlay = document.querySelector("#overlay")
const divQuestions = document.querySelector("#questions")
const closeButton = document.querySelector("#close")
let timeLapse = undefined

startButton.addEventListener("click", () => {
    divOverlay.style.top = 0 

    const timer = document.querySelector("#timer")
    let timeCounterSeconds = 0
    let timeCounterMinutes = 0

    timeLapse = setInterval( () => { 
        if(timeCounterSeconds < 10 && timeCounterMinutes < 10) {
            timer.innerHTML = "0" + timeCounterMinutes + ":0" + timeCounterSeconds
        
        } else if (timeCounterSeconds > 9 && timeCounterMinutes < 10) {
            timer.innerHTML = "0" + timeCounterMinutes + ":" + timeCounterSeconds    

        } else {
            timer.innerHTML =  timeCounterMinutes + ":" + timeCounterSeconds
        }  
        
        timeCounterSeconds++

        if(timeCounterSeconds === 60) {
            timeCounterSeconds = 0
            timeCounterMinutes++
        }
    
    },1000)
})

closeButton.addEventListener("click", () => {
    closeQuiz()
})

for(let i = 0; i < questions.length; i++) {
    const classQuestion = document.createElement("div")
    classQuestion.className = "question"
    divQuestions.appendChild(classQuestion)
    
    classQuestion.style.left = 100 * i + "vw"

    const paragraph = document.createElement("p")
    paragraph.textContent = questions[i].text
    classQuestion.appendChild(paragraph)

    const divAnswer = document.createElement("div")
    divAnswer.className = "answers"
    classQuestion.appendChild(divAnswer)

    const trueButton = document.createElement("button")
    trueButton.textContent = "Verdadeiro"
    divAnswer.appendChild(trueButton)

    const falseButton = document.createElement("button")
    falseButton.textContent = "Falso"
    divAnswer.appendChild(falseButton)

    trueButton.addEventListener("click", event => {
        clickButton(true)
        
    })

    falseButton.addEventListener("click", event => {
        clickButton(false)
    })

    function clickButton (userClick) {
        questions[i].userAnswer = userClick
            if(i < questions.length - 1) {
                divQuestions.style.left = `calc(${divQuestions.offsetLeft}px - 100vw)`
            } else {
                closeQuiz()
                
                divContainer.removeChild(startButton)
                const lista = document.createElement("ul")
                const itemLista = document.createElement("li")
                
            
                if (questions[i].answer === questions[i].userAnswer) {
                    
                }
            }
    }
}



function closeQuiz () {
    setTimeout(function () {
    divQuestions.style.left = "0vw"
    }, 500)
    divOverlay.style.top = "100vh"
    timer.innerHTML = "00:00"
    clearInterval(timeLapse)
}
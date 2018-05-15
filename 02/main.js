var appointments = {
  "06h30": {
    "title": "HIIT",
    "person": "Michael Goulart"
  },
  "07h00": {
    "title": "Zumba",
    "person": "Mariana Silva"
  },
  "07h30": {
    "title": "Power Jump",
    "person": "Alvaro Bigaton"
  },
  "08h00": {
    "title": "Fit Dance",
    "person": "Victor Bonifácio"
  },
  "08h30": {
    "title": "Gap",
    "person": "Michael Goulart"
  },
  "18h00": {
    "title": "Power Jump",
    "person": "Alvaro Bigaton"
  },
  "18h30": {
    "title": "Zumba",
    "person": "Mariana Silva"
  },
  "19h00": {
    "title": "HIIT",
    "person": "Victor Bonifácio"
  },
  "19h00": {
    "title": "Jiu-Jitsu",
    "person": "Beto Almeida"
  },
  "19h30": {
    "title": "Abdominal",
    "person": "Michael Goulart"
  },
  "20h00": {
    "title": "Fit Dance",
    "person": "Evandro Almeida"
  },
  "20h30": {
    "title": "Glúteos",
    "person": "Mariana Silva"
  }
}

var agenda = function () {
  for(var prop in appointments) {
    //console.log("Hoje às ", prop, "o professor ", appointments[prop].person, "dará aula de ", appointments[prop].title)

    var schedule = document.querySelector('#schedule')

    var appointment = document.createElement("div")
    appointment.setAttribute("class", "appointment")

    var time = document.createElement("div")
    time.setAttribute("class","time")

    var clock = document.createElement("p")
    clock.innerHTML = prop

    var circle = document.createElement("div")
    circle.setAttribute("class", "circle")

    var event = document.createElement("div")
    event.setAttribute("class", "event")

    var h2 = document.createElement("h2")
    h2.innerHTML = appointments[prop].title

    var personP = document.createElement("p")
    personP.innerHTML = appointments[prop].person

    schedule.appendChild(appointment)
    appointment.appendChild(time)
    time.appendChild(clock)
    appointment.appendChild(circle)
    appointment.appendChild(event)
    event.appendChild(h2)
    event.appendChild(personP)

  }

var horario = new Date()
var segundos = horario.getTime()

var horarioAula = prop.split("h")

var compararHorario 

console.log (horario.getTime() )
}

agenda()


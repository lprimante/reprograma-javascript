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

  var now = (new Date()).getTime()
  var smallestTimeDifference = Infinity
  var redCircle = undefined
  console.log(now)

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

    var timeAppointement = new Date()
    timeAppointement.setHours(parseInt(prop.split("h")[0]))
    timeAppointement.setMinutes(parseInt(prop.split("h")[1]))
    timeAppointement = timeAppointement.getTime()
    var difference = Math.abs(timeAppointement - now)
    if (difference < smallestTimeDifference)
      smallestTimeDifference = difference
      redCircle = circle

  }
  
  redCircle.style.backgroundColor = "red"
}


agenda()

// var now = (new Date()).getTime()
// var smallestTimeDifference = Infinity
// var redCircle = undefined

// function createElementAndAddClass(element, classe) {
//   var el = document.createElement(element)
//   if (typeof classe !== "undefined") {
//     el.classList.add(classe)
//   }
//   return el
// }

// for (var time in appointments) {
//   var appointmentDiv = createElementAndAddClass("div", "appointment")

//   var timeDiv = createElementAndAddClass("div", "time")
//   var timeP = createElementAndAddClass("p")
//   timeP.textContent = time
//   timeDiv.appendChild(timeP)
//   appointmentDiv.appendChild(timeDiv)

//   var circleDiv = createElementAndAddClass("div", "circle")
//   appointmentDiv.appendChild(circleDiv)

//   var eventDiv = createElementAndAddClass("div", "event")
//   var eventH2 = createElementAndAddClass("h2")
//   eventH2.textContent = appointments[time]['title']
//   var eventP = createElementAndAddClass("p")
//   eventP.textContent = appointments[time]['person']
//   eventDiv.appendChild(eventH2)
//   eventDiv.appendChild(eventP)
//   appointmentDiv.appendChild(eventDiv)  

//   var scheduleDiv = document.getElementById("schedule")
//   scheduleDiv.appendChild(appointmentDiv)

//   var timeAppointment = new Date()
//   timeAppointment.setHours(parseInt(time.split("h")[0]))
//   timeAppointment.setMinutes(parseInt(time.split("h")[1]))
//   timeAppointment = timeAppointment.getTime()
//   var timeDifference = Math.abs(timeAppointment - now)  
//   if (timeDifference < smallestTimeDifference) {
//     smallestTimeDifference = timeDifference
//     redCircle = circleDiv
//   }
// }

// redCircle.style.backgroundColor = "red"

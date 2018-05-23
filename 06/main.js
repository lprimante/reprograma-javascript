const form = document.querySelector('form')
const inputResultado = form.querySelector('input')

form.addEventListener('submit', function(event) {
// inputResultado.addEventListener('keyup', function(event) { 
    event.preventDefault()
    const idResultado = document.querySelector('#results')
    
    while (idResultado.firstChild) {
        idResultado.removeChild(idResultado.firstChild)
      } 
     
    const inputValue = inputResultado.value
    if (inputResultado.value === "") {
        idResultado.innerHTML = "<p>Digite uma pesquisa válida</p>"
    } else {   getData(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${inputValue}&key=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`).then(function(response) {
    const jsonResponse = JSON.parse(response)
    // console.log(response)
    const arrayResponse = jsonResponse.items
        if (jsonResponse.items.length === 0) {
            idResultado.innerHTML = "<p>Nenhum resultado encontrado</p>"
        } else {
            for (const video of arrayResponse) {
            console.log(video)            
                const link = document.createElement("a")
                const h1 = document.createElement("h1")
                const p = document.createElement("p")
                const foto = document.createElement("img")
                

                link.setAttribute("href", `https://youtube.com/watch?v=${video.id.videoId}`)
                h1.textContent = video.snippet.title
                p.textContent = video.snippet.description
                foto.src = video.snippet.thumbnails.high.url

                idResultado.appendChild(link)
                link.appendChild(foto)
                link.appendChild(h1)
                link.appendChild(p)
            }  
        }
        }, function(error) { 
            idResultado.innerHTML = `<p>${error}</p>`
        })
    }

    form.reset();

})

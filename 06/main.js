const form = document.querySelector('form')
const inputResultado = form.querySelector('input')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const idResultado = document.querySelector('#results');
    if (idResultado.childNodes) {
        console.log(idResultado)
        // idResultado.childNodes.removeChild(NodeList);
      }

    const inputValue = inputResultado.value;
   
 
    getData("https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=" + inputValue + "&key=################################").then(function(response) {
    const jsonResponse = JSON.parse(response)
    // console.log(response)
    const arrayResponse = jsonResponse.items

        for (const video of arrayResponse) {
        console.log(video)            
            const link = document.createElement("a")
            const h1 = document.createElement("h1")
            const p = document.createElement("p")

            link.setAttribute("href", ("https://youtube.com/watch?v=" + video.id.videoId))
            h1.textContent = video.snippet.title
            p.textContent = video.snippet.description

            idResultado.appendChild(link)
            link.appendChild(h1)
            link.appendChild(p)
        
        }  
        }, function(error) { 
            container.innerHTML = error
        })

    form.reset();
})

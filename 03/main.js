function createProgressBar(widthBar, container) {
    //Inicio da função 
    //Cria e inclui o H1 dentro da div com o valor do widthBar em porcentagem
    const h1 = document.createElement("h1")
    h1.textContent = widthBar + "%"
    container.appendChild(h1)

    //Usar const e não var porque o var perde o valor no loop
    //Cria e inclui a div dentro das divs do container
    const div = document.createElement("div")
    container.appendChild(div)

    //Pinta o fundo das divs com uma cor randomica
    div.style.backgroundColor = getRandomColor()

    //Inicio da função para movimentar a barra do 0 a porcentagem presente no HTML
    //Usando setTimeOut
    setTimeout(() => {div.style.width = widthBar + '%'}, 100)

    // var widthInitial = 0 
    // var id = setInterval(frame, 10)

    //     function frame () {
    //             if (widthInitial >= widthBar) {
    //                 //Limpa o intervalo e retorna para a função
    //                 return clearInterval(id);
    //                 console.log("frame")
                    
    //             } else {
    //                 widthInitial++;
    //                 //Intera o width até atingir o tamanho da widthBar
    //                 console.log("interou")
    //                 div.style.width = widthInitial + '%';
    //             }
    //         }

      
    
}

function getRandomColor() {
    //Pega os elementos das cores hexadecimais
    var letters = '0123456789ABCDEF'
    var color = '#'
    //Gera o random das letras e números para a cor
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)]
    }
    console.log(color)
    return color
}

//Seleciona todas as porcentagens em um array
//Usar const e não var porque o var perde o valor no loop 
//dataset pega o valor da data-* do HTML 
//parseInt transforma a string em número
const container = document.querySelectorAll(".progress")
for (let i = 0; i < container.length; i++ ) {
    const widthBar = container[i].dataset.percentage
    createProgressBar (widthBar, container[i])
}  


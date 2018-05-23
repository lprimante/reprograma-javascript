const colunas = document.querySelectorAll(".column")
for (const coluna of colunas) {
  const colors = coluna.children
  console.log(colors)
  for (let i = 0; i < colors.length; i++) {
    
    colors[i].addEventListener("click", function (event) {
      
      const colorTarget = event.target.style.backgroundColor
      const colorParent = event.target.parentElement
      const colorParentSibling = colorParent.nextElementSibling

      if(typeof colorParentSibling !== null) {
      const colorFromSibling = colorParentSibling.children
        colorFromSibling[Math.floor(i/2)].style.backgroundColor = colorTarget
        
      }
    })
  }
}


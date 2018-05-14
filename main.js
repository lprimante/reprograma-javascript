var form = document.querySelector('#input');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  var campo = form.querySelector('input');
  var lista = document.querySelector('#list');
  var tarefa = campo.value;

  if(tarefa.length < 1) {
    alert("Por favor, preencha um valor válido");
  } else { 
    var novaLinha = document.createElement("li");
    novaLinha.textContent = tarefa;
    lista.appendChild(novaLinha);
    form.reset();
    
    novaLinha.addEventListener('click', function(event) {
      if(event.target.classList.toggle('done')){
        event.target.classList.add('done');
      } else {
        event.target.classList.remove('done');
      }
    });
  }  
});

var form = document.querySelector('#input');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  var campo = form.querySelector('input');
  var lista = document.querySelector('#list');
  var tarefa = campo.value;

  if(tarefa.length < 1) {
    // if(tarefa !== "") {  ------------>>>>> Outra forma de fazer a comparação
    alert("Por favor, preencha um valor válido");
  } else { 
    var novaLinha = document.createElement("li");
    novaLinha.textContent = tarefa;
    //var novaTarefa = document.createTextNode(tarefa)  ------------->>>>> Outra forma de incluir texto no DOM 
    lista.appendChild(novaLinha);
    form.reset();
    // campo.value = ""  ------------------------>>> Outra forma de limpar o form

    novaLinha.addEventListener('click', function(event) {
      if(event.target.classList.toggle('done')){
        event.target.classList.add('done');
      } else {
        event.target.classList.remove('done');
      }
    });
  }  
});

$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        const tarefaNova = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>')
        $(`<li> ${tarefaNova} </li>`).appendTo(novaTarefa)
          novaTarefa.text(tarefaNova);


          $(novaTarefa).appendTo('ul')
          $('#nome-tarefa').val('')
     }) 
     $('ul').click(function(){
        $('ul').css('text-decoration: line-through')
     })
    }) 

$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()
        const tarefaNova = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>')
          $(`<li id="${tarefaNova}"`).appendTo(novaTarefa)
          $(novaTarefa).appendTo('ul')
          $('#nome-tarefa').val('')
     }) 
})
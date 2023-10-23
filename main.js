const form = document.getElementById('form-numeros');


function validaForm(numeroA, numeroB) {
    return numeroB > numeroA
 }


    form.addEventListener('submit', function(e){
    let formValidado = false
    e.preventDefault()
    
    const numeroA = document.getElementById('numeroA');
    const numeroB = document.getElementById('numeroB')
    const mensagemSucesso = `O formulário está validado`




    formValidado = !validaForm (numeroA.value, numeroB.value)
    if (formValidado) {
        alert("O formulário não é valido")
     } else{
        alert(mensagemSucesso)
     }
})

console.log(form)
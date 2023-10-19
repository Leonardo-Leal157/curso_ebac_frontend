const form = document.getElementById('form-deposito')

function validanome(nomeCompleto) {
   const nomeComoArray = nomeCompleto.split(' ')
   return nomeComoArray.length >= 2
}

form.addEventListener('submit', function(e){
    let formEValido = false
    e.preventDefault()

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`


    formEValido = !validanome (nomeBeneficiario.value)
    if (formEValido) {
        alert("O nome não está completo")
     } else{
        alert(mensagemSucesso)

        nomeBeneficiario.value = ''
        numeroContaBeneficiario = ''
        valorDeposito = ''
     }
})

console.log(form)


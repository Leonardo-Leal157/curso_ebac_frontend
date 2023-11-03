const botao = document.getElementById("botao");
const table = document.getElementById("table");
const formulario = document.getElementById("formulario");

let linhas = '';

formulario.addEventListener("submit", function (e) {
    e.preventDefault()

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    if (linhas.includes(telefone)) {
       alert('O telefone'  +  telefone  +  'já foi cadastrado')
    } else {
        let linha = '<tr>';
        linha += `<td> ${nome} </td>`;
        linha += `<td> ${telefone} </td>`;
        linha += `</tr>`
    
        linhas += linha
        
    
      

        atualizaTabela()
        contactForm.reset();
    }
});

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas; 
}
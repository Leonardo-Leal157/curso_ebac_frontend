const botao = document.getElementById("botao");
const table = document.getElementById("table");
const formulario = document.getElementById("formulario");

let linhas = '';

formulario.addEventListener("submit", function (e) {
    e.preventDefault

    atualizaTabala()
    
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

    if (nome.includes(inputNomeAtividade.value)) {
        let linha = '<tr>';
        linha += `<td> ${nome.value} </td>`;
        linha += `<td> ${telefone.value} </td>`;
        linha += `</tr>`
    
        linhas += linha
        
    
        nome.value = '';
        telefone.value = '';

        contactForm.reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

function atualizaTabala(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas; 
}
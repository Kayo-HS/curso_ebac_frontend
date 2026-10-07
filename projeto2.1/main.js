const form = document.getElementById("form-contatos");

const contatos = [];
const numeros = [];

let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
});


function adcionaLinha(){
    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumeroContato = document.getElementById("numero-contato");

    if(numeros.includes(inputNumeroContato.value)){
        alert(`O Número: ${inputNumeroContato.value} já foi inserido`);
    }
    else{

        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>'

        linhas += linha;
    }
    inputNomeContato.value = " ";
    inputNumeroContato.value = " ";
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}
const form = document.getElementById("form-afazeres");
const caixaSelecao = document.getElementById("caixa-selecao");

const listaAfazeres = [];

let linhas = "";

form.addEventListener("submit", function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();


});

function adcionaLinha(){
    const inputNomeTarefa = document.getElementById("nome-tarefa");

    if(listaAfazeres.includes(inputNomeTarefa.value)){
        alert(`A Tarefa: ${inputNomeTarefa.value} já foi adicionada`)
    }
    else{
        listaAfazeres.push(inputNomeTarefa.value);

        

        let linha = '<tr>';
        linha += '<td><input type="checkbox" id="caixa-selecao"></td>'
        linha += `<td>${inputNomeTarefa.value}</td>`;
        linha += '</tr>'

        linhas += linha;

        
    }
    inputNomeTarefa.value = " ";
}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}
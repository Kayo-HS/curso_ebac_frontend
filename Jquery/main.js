const form = document.getElementById("form-afazeres");
const inputNomeTarefa = document.getElementById("nome-tarefa");
const corpoTabela = document.querySelector("tbody");
const botaoCancelar = document.getElementById("botao-cancelar")


const listaAfazeres = [];



form.addEventListener("submit", function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();


});

function adcionaLinha(){
    const nome = inputNomeTarefa.value.trim();

    if(nome == ""){
        return;
    }
    const tarefaExiste = listaAfazeres.some(
        tarefa => tarefa.nome.toLowerCase() == nome.toLowerCase()
    );
    if (tarefaExiste){
        alert(`A tarefa "${nome}" já foi adicionada. `);
        return;
    }

    listaAfazeres.push({
        nome: nome,
        concluida: false
    });
    
    inputNomeTarefa.value = " ";
    inputNomeTarefa.focus();
}

function atualizaTabela(){
    
    corpoTabela.innerHTML = "";
    listaAfazeres.forEach(function(tarefa) {
        const linha = document.createElement("tr");
        const celulaCheckbox = document.createElement("td");
        const celulaNome = document.createElement("td");
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.checked = tarefa.concluida;

        checkbox.addEventListener("change", function() {
            tarefa.concluida = checkbox.checked;
            atualizaTabela();
        });

        celulaCheckbox.appendChild(checkbox);
        celulaNome.textContent = tarefa.nome;

        if (tarefa.concluida) {
            linha.classList.add("concluida");
        }

        linha.appendChild(celulaCheckbox);
        linha.appendChild(celulaNome);
        corpoTabela.appendChild(linha);
    });
}

botaoCancelar.addEventListener("click", function() {
    inputNomeTarefa.value = "";
    inputNomeTarefa.focus();
});


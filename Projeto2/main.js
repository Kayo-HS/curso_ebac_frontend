const form = document.getElementById("form-atividade")
const imgAprovado = '<img src="./image/emojiFeliz.png" alt= "Emoji celebrando"/>';
const imgReprovado = '<img src="./image/emojiTriste.png" alt= "Emoji triste"/>';

const atividades = [];
const notas = [];
const spamAprovado = '<spam class = "resultado aprovado">Aprovado</spam>';
const spamReprovado = '<spam class = "resultado reprovado">Reprovado</spam>';
const notaMinima = parseFloat(prompt("Digite a nota mínima: "));



let linhas = "";


form.addEventListener("submit", function(e){
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

});

function adcionaLinha(){
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    }
    else{

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeAtividade.value = " ";
    inputNotaAtividade.value = " ";

}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal (){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spamAprovado : spamReprovado;
    
}

function calculaMediaFinal(){
    let somaDasNotas = 0;
    for(let i = 0; i < notas.length;  i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;


}
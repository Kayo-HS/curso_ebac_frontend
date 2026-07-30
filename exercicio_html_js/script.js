const form = document.getElementById("MeuFormulario");

form.addEventListener("submit",function(event){
    event.preventDefault();

    const CampoA = document.getElementById("campoA");
    const CampoB = document.getElementById("campoB");

    const Valor1 = Number(CampoA.value);
    const Valor2 = Number(CampoB.value);

    const sucesso = document.querySelector(".mensagemSucesso");
    const erro = document.querySelector(".mensagemErro");

    const mensagemSucesso = "O Número no campo dois é maior que do primeiro campo, tudo certo!"
    const mensagemErro = "Errado! Tente novamente, dessa vez coloque o menor número no primeiro campo!"


    sucesso.style.display = "none";
    erro.style.display = "none";

    if (Valor2 > Valor1){
        sucesso.innerHTML = mensagemSucesso;
        sucesso.style.display = "flex";

        CampoA.value = " ";
        CampoB.value = " ";
}
    else{
        erro.innerHTML = mensagemErro;
        erro.style.display = "flex";
}
});


// Captura os elementos HTML e declaração as variáveis
var texto = document.getElementById("texto");
var textCriptografado = document.getElementById("criptografado");
var chaveInput = document.getElementById("chave");

// Função para criptografar usando a Cifra de Vigenère
function criptografar() {
    let entrada = texto.value.toUpperCase(); // Texto digitado pelo usuário para criptogrfar tranformado todo em maiúsculo para evitar erros
    let chave = chaveInput.value.toUpperCase(); // Chave escolhida pelo usuário tranformada todo em maiúsculo para evitar erros
    let chaveRepetida = "";
    let resultado = "";
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Alfabeto utilizado na cifra todo em maúsculo para bater com as entreadas da senha e chave

    if (chave === "") {
        alert("Por favor, insira uma chave para criptografar o texto.");
        return;
    }

    // Repetindo a chave até atingir o tamanho do texto
    for (let i = 0; i < entrada.length; i++) {
        chaveRepetida += chave[i % chave.length];
    }

    // Processo de criptografia
    for (let i = 0; i < entrada.length; i++) {
        let letraTexto = entrada[i];
        let letraChave = chaveRepetida[i];

        if (alfabeto.includes(letraTexto)) {
            let linha = alfabeto.indexOf(letraTexto);
            let coluna = alfabeto.indexOf(letraChave);
            resultado += tabelaVigenere[linha][coluna]; // Pegando o caractere equivalente da tabela
        } else {
            resultado += letraTexto; // Mantém caracteres não alfabéticos
        }
    }

    textCriptografado.value = resultado; // Exibe o texto criptografado
}
// Função para descriptografar usando a Cifra de Vigenère
function descriptografar() {
    let textoCriptografado = textCriptografado.value.toUpperCase(); // Pega o texto criptografado
    let chave = chaveInput.value.toUpperCase(); // Chave também em maiúsculo
    let chaveRepetida = "";
    let resultado = "";
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (chave === "") {
        alert("Por favor, insira uma chave para descriptografar o texto.");
        return;
    }

    // Repetindo a chave até o tamanho do texto criptografado
    for (let i = 0; i < textoCriptografado.length; i++) {
        chaveRepetida += chave[i % chave.length];
    }

    // Processo de descriptografia
    for (let i = 0; i < textoCriptografado.length; i++) {
        let letraCripto = textoCriptografado[i];
        let letraChave = chaveRepetida[i];

        if (alfabeto.includes(letraCripto)) {
            let linha = alfabeto.indexOf(letraChave);
            let coluna = tabelaVigenere[linha].indexOf(letraCripto);
            resultado += alfabeto[coluna]; // Retorna à letra original
        } else {
            resultado += letraCripto; // Mantém caracteres não alfabéticos
        }
    }

    document.getElementById("descriptografado").value = resultado; // Exibe o texto descriptografado
}
function apagar() {
    texto.value = ""; // Limpa o campo de texto
    textCriptografado.value = ""; // Limpa o campo de texto criptografado
    document.getElementById("descriptografado").value = ""; // Limpa o campo de texto descriptografado
    chaveInput.value = ""; // Limpa o campo da chave
}
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

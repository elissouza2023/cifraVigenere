// Gerando a Tabela de Vigenère (26x26)
function gerarTabelaVigenere() {
    let tabela = [];
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 26; i++) {
        tabela[i] = alfabeto.slice(i) + alfabeto.slice(0, i);
    }
    return tabela;
}

const tabelaVigenere = gerarTabelaVigenere();

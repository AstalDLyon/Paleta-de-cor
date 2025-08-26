const btnGerador = document.getElementById('btn-gerador');
const palletContainer = document.querySelector('.pallet-container');

btnGerador.addEventListener('click', gerarPaleta);

function gerarPaleta() {
    const cores = []; // array vazio pra armazenar cor
    for (let i = 0; i < 5; i++) {
        cores.push(gerarCorAleatoria());
    }

    atualizarCores(cores); // atualiza a interface mostrando as cores novas
}

function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF'; // limita o escopo só  pra hexadecimal, que é o que usamos em cores
    let cor = '#'; // inicial a string com o simbolo #

    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function atualizarCores(cores) {
    palletContainer.innerHTML = ""; // Limpa as caixas antigas

    cores.forEach(cor => { // pra cada element no vetor executa o codigo abaixo
        const box = document.createElement("div"); //cria um elemento div vazio pra ter a caixa e as infos
        box.className = "color-box"; // define a classe da caixa, onde tem os estilos definidos
        box.innerHTML = `
            <div class="color" style="background-color: ${cor};"></div>
            <div class="color-info">
                <span class="color-hex">${cor}</span>
                <i class="far fa-copy copy-btn" title="Copiar código da cor"></i>
            </div>
        `;/*
        A estrutura criada tem:

        Um <div> com classe color que tem o fundo colorido com a cor gerada
        Um <div> com classe color-info que contém:
        Um <span> com o texto do código hexadecimal (ex: "#FF0000")
        Um ícone <i> de copiar para o usuário poder copiar o código da cor
        ${cor} é uma interpolação que insere o valor da variável cor no HTML

        A troca é feita em dois lugares:

        No estilo inline style="background-color: ${cor};" para definir a cor do fundo
        No texto dentro do <span> para mostrar o código da cor */

        palletContainer.appendChild(box); /* 
        Adiciona a nova caixa de cor ao contêiner 
        Isso torna o elemento visível na página
        Este processo é repetido para cada uma das 5 cores, criando 5 caixas lado a lado*/
    });
}

gerarPaleta(); // Caso você queira cores diferentes ao atualizar
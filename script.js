const texto = "Giovana Almeida";
const elementoTexto = document.getElementById('texto-maquina-escrever');
let indice = 0;

function escreverTexto() {
    if (indice < texto.length) {
        elementoTexto.textContent += texto.charAt(indice);
        indice++;
        setTimeout(escreverTexto, 50); // Intervalo de 50 milissegundos entre os caracteres
    }
}

escreverTexto();

import { emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js"

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome")
const tituloDocumento = document.getElementById("titulo-documento");
tituloDocumento.textContent = nomeDocumento || "Documento Sem Titulo"


const textoEditor = document.getElementById("editor-texto")
selecionarDocumento(nomeDocumento);

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
        valor: textoEditor.value, 
        nomeDocumento: nomeDocumento})
})

function atualizaTextoEditor(texto){
    textoEditor.value = texto
}

export { atualizaTextoEditor }
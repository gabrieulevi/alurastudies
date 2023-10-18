import { atualizaTextoEditor } from "./documento.js";

const socket = io();
function emitirTextoEditor(dados){
    socket.emit("texto_editor", dados)
}
 
function selecionarDocumento(nome){
    socket.emit("selecionar_documento", nome)
}

socket.on("texto_editor_clientes",(valor) => atualizaTextoEditor(valor))
export { emitirTextoEditor, selecionarDocumento}
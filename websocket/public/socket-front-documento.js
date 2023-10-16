import { atualizaTextoEditor } from "./documento.js";

const socket = io();
function emitirTextoEditor(texto){
    socket.emit("texto_editor", texto)
}

export { emitirTextoEditor }
socket.on("texto_editor_clientes",(valor) => atualizaTextoEditor(valor))
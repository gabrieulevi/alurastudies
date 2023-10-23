import io from "./servidor.js";
io.on('connection', (socket)=> {
    console.log("conexão realizada", socket.id)
    socket.on("selecionar_documento", (nomeDocumento) => {
        socket.join(nomeDocumento);
    })

    socket.on("texto_editor", ({valor, nomeDocumento}) => {
        // socket.broadcast.emit("texto_editor_clientes", valor);
        socket.to(nomeDocumento).emit("texto_editor_clientes", valor);
    })
})


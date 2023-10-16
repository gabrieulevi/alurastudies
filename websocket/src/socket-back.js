import io from "./servidor.js";
io.on('connection', (socket)=> {
    console.log("conexão realizada", socket.id)
    socket.on("texto_editor", (valor) => {
        socket.broadcast.emit("texto_editor_clientes", valor);
    })
})
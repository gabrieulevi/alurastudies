import express from 'express';
import path from 'path';
import url from 'url';
import http from 'http'
import { Server } from 'socket.io';
const porta = process.env.porta || 3000;

const app = express();
const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico  = path.join(caminhoAtual, "../..", "public");

app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

servidorHttp.listen(porta, () => console.log(`o servidor subiu e está escutando na porta ${porta}`));

const io = new Server(servidorHttp);
export default io
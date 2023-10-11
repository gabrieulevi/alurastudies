import express from 'express';
import path from 'path';
import url from 'url';

const porta = process.env.porta || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico  = path.join(caminhoAtual, "../..", "public");

const app = express();

app.listen(porta, () => console.log(`o servidor subiu e está escutando na porta ${porta}`));
app.use(express.static(diretorioPublico));
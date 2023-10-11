import express from 'express';
import url from 'url';
import path from 'path';

const app = express();
const porta = process.env.porta || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
//retorna o endereço do import através do meta
const diretorioPublico = path.join(caminhoAtual, '../..', 'public');
//este diretorio -> diretorio raiz -> public
app.use(express.static(diretorioPublico));

app.listen(porta, () => console.log(`server escutando na porta ${porta}`));
